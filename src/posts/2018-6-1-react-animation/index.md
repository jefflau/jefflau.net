---
title: Building animations in React
slug: /building-animations-in-recat
date: 2018-04-05
draft: true
---

## Introduction

I've been learning SVG animations for the past week or so now. It started with watching Advanced SVG animation by Sarah Drasner on Frontend masters. She shows you how to make awesome standalone animations as well as UI context shifting.

Designing interface animations by val head. Good for theory

## CSS Animations

For movements under 3 steps
Use Transforms for hardware acceleration

Stacking transforms on one element won't work well, because transforms are all one value. You can either wrap multiple elements and divs into one.

## React Motion

Single movements that need to look realistic with physics.

## GSAP

For complex sequenced animations. Solves cross browser issues on CSS.

Timelines allows you to do sequencing without delays. Allows you to schedule your animations together or after each other. Timelines can be nested so you can create scenes and move them around. Change timings and pause your animations or reverse your animation (Closing a modal?)

MorphSVG allows you to morph two different SVGs. You can adjust

## React Transition Group Plus

Better than React transition group but forked from original code
