---
layout: post
permalink: /blog/moving-to-jekyll/
short_name: Moving to Jekyll
title: How I used Jekyll and Github Pages to create my website
description: >-
  Moving my website from React to a more primitive server-rendered website has been a great choice.
  Find out why and how I did this.
tags: meta jekyll
last_modified_at: 2020-11-29
---

Or how server-side rendering by [GitHub Pages](https://pages.github.com) improved my life.
<br>
This website was created using [Jekyll](https://jekyllrb.com) with its default theme [Minima](https://github.com/jekyll/minima). And it makes great use of server-side rendering and cool plugins like [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) or [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap).

## Prior state

Around Apr 2019 I created a website with some brief info about me, a timeline working as a CV, and contact info.
This website was one of my first attempts at using React's [create-react-app](https://github.com/facebook/create-react-app) and it was very fun and enriching.
However, I had invested more time in the CSS than in the content; with only a few written lines.
It was also very discouraging to add new content since that meant designing some CSS for the blog and creating some cool React component for articles, headers, comments, ...

Thereby, when in Nov 2020 I was changing the domain name, I concluded it was about time I renovated the project.

## First steps

The first thing to do was to research about Jekyll, which, conveniently enough, is the engine of GitHub pages.
There seemed to be multiple "themes" but not knowing much about the topic I decided to start with the default, Minima.
<br>
I found a great repo called [gh-pages-minima-starter](https://github.com/jsanz/gh-pages-minima-starter) from where I took many tips and the docker-compose file to develop locally.
In the end I cloned and edited most folders in [the minima repository](https://github.com/jekyll/minima)

At the beginning, I just played around with the template engine, layouts and server-side rendering.
I started creating building blocks that I could re-use later. I also put some effort into the header and footer since those are visible everywhere in the site.

## Benefits

Objectively, one of the most useful features is the markdown rendering. It allows you to just focus on the content and not on HTML/CSS.

Another thing I love about the templating system is how modular and consistent everything is. You build on different levels of abstraction and once you are done with the low-level, you don't have to look at it again. If used properly, you can't have broken links; since these either update automatically or break, making the build fail and thus not reaching production. It just works.

Finally, I appreciate that it comes with "batteries included". As soon as you clone the minima repo you could start writing blog posts and they would look nice. It has robust defaults and it's easy to improve in small iterative steps.

## Conclusion

If you are intrigued by this idea I recommend that you immediately clone [the minima repository](https://github.com/jekyll/minima) and write a couple of `.md` files in the `_posts` folder. It's very easy to try and you will quickly see whether you want to go further or not.

If you have any question or feedback leave a comment below or contact me privately (more info in the footer)

Thanks for passing by!
