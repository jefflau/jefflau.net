---
title: Why UI animation is important for your user experience
slug: /why-ui-animation-is-important-for-your-user-experience
date: 2018-04-07
---

I've been interested in animation for as long as I remember and ever since I started designing and building for the web I've been interested in UI animation, which was about 8 years ago. At the time we were just getting out of a Adobe flash depression and people were very vary about putting animations anywhere on their pages. Over the years I have used dozens of different transitions to create sliding menus, carousels, flipping cards or loaders.

Animation has a much better reputation now due to the prevalence of mobile apps today. Transitions between pages on mobile is a must or your app will feel clunky. We have got used to the app keeping track of where you are and being aware if the last page was a swipe or right. At the same time support for animations is becoming better and better. CSS transitions and animations have almost full browser support. Greensock and other animation libraries are very mature now. The Web Animations API is becoming better supported and can be used today with this [polyfill](https://github.com/web-animations/web-animations-js/tree/master). It is the first time we have timeline based animation where we can play/pause/reverse animations native in the browser.

## Why would we want to use animation in our applications?

Animation is an upfront cost for your application, so it may be hard to justify it in a smaller project, but there are many benefits to your user experience when you bake in your animations. However if you don't bake your animation into the experience it's going to _feel_ like it wasn't meant to be there.

Similar to tooling in development it generally is a higher cost at the beginning. However it is important part of the design process to at least analyse where animations make sense for your product. In the long run when you have time and budget to add them in at the right places, it can add to the user experience dramatically. However if you add them in retrospectively without at first designing holistically, it may look like the 'sugar on top', making your UI look tacky.

> If it looks like the sugar on top, it's because you treated it that way - Sarah Drasner

### Visual cues and feedback

One of the most basic uses for animation in UI is for visual feedback when you interact with the application. Scaling, changing the colour or moving an element due to a user's hover or click is very common. It gives an indication that a button can be clicked. Additionally without animation these transitions would be instant and create a visual 'jump' of colour or position that may make your application look janky. Alternatively if something needs to load, adding an animation will give an indication to the user that they need to wait and won't think your application is broken.

### Keeping context by flowing through states

Another great use for animation is keeping the context of your UI as your user interacts with your application. One of the best examples of this in Stripe's payment process. With the mostly boring process of forms, Stripe keeps your focus and uses transition to keep you focussed through the flow of an otherwise boring process of filling in a payment form. The animations are subtle and smooth and some are staggered to give a more delightful experience.

<video width="200" controls>

  <source src="https://stripe-images.s3.amazonaws.com/videos/connect/express.mp4" type="video/mp4">
</video>

### Create Focus

Animations for the most part draw your attention. Especially on the web. We are not used to animations as much so any kind of movement will draw our attention, even the banner ads we have trained ourselves to ignore are annoying _because_ they draw our attention. At the same time, you can also animate colour, opacity or blur. This could help to highlight other elements by fading it out and blurring it and make colourful and scaled items 'pop'.

## How to proceed

Most of the things I've written about here I have gleaned from smarter minds in the field such as [Sarah Drasner](http://twitter.com/sarah_edo) who has blown me away with her [SVG animations on codepen](https://codepen.io/sdras/) and [Val Head](http://twitter.com/vlh) who's also got a great book on [designing interface animations](https://www.amazon.com/Designing-Interface-Animation-Meaningful-Experience/dp/1933820322). It's a short read and full of gems and is a must read if you want to learn more about the theory of UI animation and animation in general. She also did a podcast with [Cennydd Bowls](https://twitter.com/cennydd) that is fantastic called [Motion and Meaning](http://motionandmeaning.io/) where they also go over Disney's 12 animation principles which they dissect and glean the important parts. I also follow [Sara Soueidan](https://twitter.com/SaraSoueidan) who regularly writes on animation. Here's an article she wrote on [animating SVG with greensock](https://www.creativebloq.com/web-design/supercharge-svg-animations-gsap-11618683)

Your main go-tos for doing web based animation will be firstly CSS animations and transitions. For short UI animations with 3 or less things happening, they are perfect. For anything above that you'll want to transition over to a timeline based tool that can allow you to adjust timing and rearrange your animation without setting delays. You have a few options here, but for full browser support and power the go-to library is [GSAP](https://greensock.com/). Getting animating!
