---
title: Arrange, Act, Assert - How to test React applications
slug: /arrange-act-assert-how-to-test-react-applications
date: 2018-03-02
draft: true
---

I've mainly avoided testing my React components, because quite frankly, it seemed complicated. Instead I've chosen to test mostly things that were easier to unit test. And instead of trying to test my components as they were, I would design my components so they were easier to test as stateless components. However changing the way I write my components to test more easily has led to abstractions that have made my code less easily reasoned about. This isn't to say this is bad, but you can always go too far.

Two libraries in the last couple years have made testing much easier for me. The first is Jest, it contains everything you need including the test runner and the assertion library. Most libraries before this would require to add two different libraries such as Chai and Mocha, but Jest comes with both and more.

The second is React testing library by Kent C. Dodds. When Enzyme came out, I tried it out and was immediately confused about how I should write my tests. Testing shouldn't be that hard. And after going through Kent's testing workshop on Frontend Masters I find myself nodding along at his many gem's such as:

> The more your tests resemble the way your software is used, the more confidence they can give you.

It's very rare that you can test your UI without any kind of side effect, and so you will need to mock out those functions. Kent's method is to test as close to what the user would do as possible, so he removes the ability to shallow render your components like Enzyme. Shallow rendering mocks out every React component that is within the React component you are testing and so if you want to mock anything he advises you to be explicit. With Jest's super easy mocking, it complements Kent's testing library super nicely as you will need to mock out functions that create side effects. The reason why mocking out everything by default is undesirable is because if you refactor your component to have a child component, some of your tests will fail because the DOM elements inside your child components won't be rendered. Mounting your entire component removes this problem of testing implementation detail.

## Arrange, Act, Assert

The basic idea behind testing has three stages. React components are no different so we can mentally go through each stage when we write our tests.

### Arrange

Arrange represents the staging of the test. You create and mount your component as well as mock any functions that need to be mocked for our component.

```js
//arrange
const handleSubmit = jest.fn();
const { getByText, container } = renderIntoDocument(
  <SearchName onSubmit={handleSubmit} />
);

const form = container.querySelector('form');
const submitButton = getByText('Search for domain');
const domainName = form.querySelector('input[type=text]');
```

Firstly I mock my event handler callback with a `jest.fn()`, which allows me to spy on how many times it has been called and with what arguments and make assertions on that. Secondly I pass that mock function to my component and render it to the document using `react-testing-library`'s utility function `renderIntoDocument`. Lastly I get all the dom nodes I need using the utility function `getByText` which is provided for us as a way of searching for a dom by the text within it. Since they are good ol' DOM nodes, we can also use `querySelector` to get any nodes we need, although it is unadvisable as it often leads to querying classes that could change in the future. Since I know we are always going to have a form, and we are only ever going to have one input with the type of text, I think it's okay to use it here.

### Act

Acting is the process of the user making actions on our interface. Since this is a test, we need to simulate the user's interaction with our application. By default React already provides a `Simulate` API that allows you to simulate any of the events React exposes. The `react-testing-library` re-exports this for convenience, so it's good to know where it came from when you need to look up documentation.

```js
domainName.value = 'vitalik.eth';
Simulate.change(domain);
Simulate.submit(submitButton);
```

The action is very simple, we just need to act out what the user would do. In this situation he is typing into the input box, causing an onChange event to happen (which subsequently changes the state with setState).

### Assert

The last stage is assertion. We check how many times the mock function has been called with Jest's built in spy methods as well as the arguments it has been called with. We also check to see if the submitButton has a type of submit, which would also allow the user to click, not just hit the enter key. And lastly we assert that the input has been reset to an empty string.

```js
//assert
expect(handleSubmit).toHaveBeenCalledTimes(1);
expect(handleSubmit).toHaveBeenCalledWith('vitalik.eth');
expect(submitButton.type).toBe('submit');
expect(domainName.value).toBe('');
```

## Conclusion

As we can see this a fairly simple way to test our components and it's much simpler with both Jest and React testing library. We don't need to delve into such tiny details with unit tests, and we get confidence in our application because these tests are testing closely to what the user would do. If the tests end up being unit tests because there are no side effects that's fine too, but we aren't worried about making it a pure unit test

Shallow is bad, because it automatically mocks. Refactors will break your tests which means you are testing implementation details.

Test the public api instead of implementation details.

There are cases for mocking things, and for those you should be explicit about it by using jest.mock

End-to-end tests are harder to see where the bug, but having integration tests are a nice balance which tests how a user would use it, but you don't need dozens of unit tests to test one component. For instance you would not want to test state on a React component, because it is largely irrelevant to the user. Whether your application uses internal React state, Redux or directly taking the values from the DOM is irrelevant to the user
