---
title: Deploy your React client-side app with Surge
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /deploy-your-react-client-side-app-with-surge
date: 2016-08-28T17:05:11.811Z
date_updated:   2016-08-28T17:05:11.790Z
category: "tech"
author: "jeff"
tags:
    - surge
    - javascript
    - deployment
---

I'm used to using something like Heroku or Digital Ocean to deploy my applications, but I've been recently working on mostly client-side applications that talk to an API. With them being separate from the server you can actually deploy your site 100% statically, which means you can put it on something like Github pages. Github pages doesn't support client-side routing out of the box so I looked into other options. I think it is possible, but thankfully in my search I came across [Surge](https://surge.sh). Surge is a static site deployment service that allows you to deploy any static site in seconds. Literally.

```bash
$ npm install -g surge
$ cd myProject
$ surge
```

And you're done. Post over. Pretty much.

Another of other thing that surge gives you out the box is collaboration. When you deploy you just add their email:

```bash
$ surge --add your.friend@gmail.com
```

They'll get an email, make an account and now they can deploy to the same `yourproject.surge.sh` URL as you're deploying to. Pretty sweet!

You can also add your own domain super easily as well. You just need to [point your domain to Surge's servers](https://surge.sh/help/adding-a-custom-domain) and then you can just run the same command

```bash
$ surge --domain myproject.com"
```

And to speed things up I'm saving this as a script in my package.json to do my build and deploy at the same time. This is my usage with the `create-react-app` build tool.

```JSON
 "scripts": {
    "deploy": "npm run build && cd build && mv index.html 200.html && surge . --domain animedrop.com"
```

In my script, I'm also renaming index.html to 200.html so I can [take full advantage of client-side routing](https://surge.sh/help/adding-a-200-page-for-client-side-routing). If you don't do this, deep linking to `http://animedrop.com/2016/summer` will go to a 404 page, because the entire site is static. It's trying to look for a `/2016/summer.html` that doesn't exist so you need to create a 200.html to catch these requests and let them get there client-side.

That's the only gotcha really. You get all of this goodness for free so it really makes a great development/staging server. I look forward to possibly trying out their premium options in the future as they make it so goddamn easy to deploy. Headache averted.
