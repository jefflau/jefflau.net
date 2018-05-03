---
title: Arrange, Act, Assert - How to test React components
slug: /arrange-act-assert-how-to-test-react-components
date: 2018-05-03
---

I've mainly avoided testing my React components, because quite frankly, it seemed complicated. Instead I've chosen to test mostly things that were easier to unit test. And instead of trying to test my components as they were, I would design my components so they were easier to test as stateless components. However changing the way I write my components to test more easily has led to abstractions that have made my code less easily reasoned about. This isn't to say this is bad, but you can always go too far.

Two libraries in the last couple years have made testing my components much easier for me. The first is Jest, it contains everything you need including the test runner and the assertion library. Most libraries before this would require to add two different libraries such as Chai and Mocha, but Jest comes with both included by default and added goodies such as test coverage and snapshot testing.

The second is [React testing library](https://github.com/kentcdodds/react-testing-library) by Kent C. Dodds. When Enzyme came out, I tried it out and was immediately confused about how I should write my tests. Testing shouldn't be that hard. And after going through [Kent's testing workshop](https://frontendmasters.com/workshops/testing-react-apps/) on Frontend Masters I find myself nodding along at his many gems such as:

> The more your tests resemble the way your software is used, the more confidence they can give you.

Kent advocates testing as close to what the user would do as possible, so he removes the ability to shallow render your components like Enzyme would allow. If you haven't used Enzyme, it is a react testing library that gives you an enormous amount of ways to test your components. Kent believes that some of these ways are unnecessary and sometimes harmful to the way you test. One of the things that is very common with testing with Enzyme is shallow rendering. Shallow rendering mocks out every React component that is within the React component you are testing. Mocking out everything by default is undesirable because if you refactor your component to wrap some of your DOM nodes with a child component, some of your tests will fail because the DOM elements inside your child components won't be rendered. The actual functionality of your component may not have changed, only the implemenation. Therefore with shallow rendering you end up testing implementation detail making your tests brittle.

It is unlikely that you won't have to mock anything though, so if you do end up mocking things you should use jest's mocking functionality to explicitly mock out functions that are creating side effects.

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
submitButton.click();
```

The action is very simple, we just need to act out what the user would do. In this situation he is typing into the input box, causing an onChange event to happen (which subsequently changes the state with setState). Secondly the user would most likely click on the submit button, which would cause the form to submit. In this example I am using the [`click`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) method directly from the DOM element. Alternatively you could use the [`fireEvent`](https://github.com/kentcdodds/react-testing-library#fireeventnode-htmlelement-event-event) function from `react-testing-library` which does the same thing.

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

As we can see this a fairly simple way to test our components and it's much simpler with both Jest and React testing library. We don't need to delve into tiny details with arbitrary unit tests, and we get confidence in our application because these tests are simulates very close to what the user would do. If the tests end up being unit tests because there are no side effects that's fine too, but we aren't worried about making it a pure unit test for the sake of purity.

We are trying to avoid implementation details as much as possible, so we don't care what the classes are on the buttons and inputs, but are using [`getByText`](https://github.com/kentcdodds/react-testing-library#getbytexttext-textmatch-htmlelement) to find the button with the text the user actually sees. If we change the classes on this for styling reasons, the tests don't care about that and they shouldn't have to. We also avoiding testing things like state, because ultimately the user does not care about state, only what shows up on screen.

Because we are mocking one might call this an integration test, but since we are just testing this component and nothing else, we could just call this a unit test for our component. Ultimately it doesn't matter what it is called, just that it gives us the guarantees we need to be confident our component works as intended.
