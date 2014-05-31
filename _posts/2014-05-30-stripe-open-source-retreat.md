---
layout: post
title: Stripe Open-Source Retreat
categories: envision
tags: developer server
published: true
comments: true
share: true
---

Heard of [Stripe Open-Source Retreat](https://stripe.com/blog/stripe-open-source-retreat)? This post is an open-source application letter for **for-get HTTP** - [https://github.com/for-GET](https://github.com/for-GET).

## for-GET HTTP

is a collection of software libraries that put together is:

* functional - it will run an HTTP server
* complete - it will follow and understand 100% of HTTP specification
* reliable - it will have functional tests, and the parser uses the grammar the specification comes with
* redundant - it will be replaceable with another implementation that works on the same data (grammar, tests, state machine)
* efficient - it is KISS and DRY across programming languages

---


## application form

I'll get into the details as well, but first things first: fill-in-the-spaces of the "application form" (as they appeared in Stripe's blog post).

<ul class="fa-ul">
    <li><i class="fa-li fa fa-pencil-square-o"></i><strong>to work full-time on an open-source project</strong>
        <br>for-GET HTTP</li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>internal tech talks</strong>
        <br><a href="https://www.youtube.com/watch?v=9Qnx1h5cQxo">for-GET HTTP</a>, <a href="https://www.youtube.com/watch?v=Nh6VeuvVRdQ">Keep It to Tools</a>, <a href="http://www.meetup.com/Stockholm-Node-js/events/182818792/">TDD for HTTP APIs</a>, ...</li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>it's some "infrastructure" that every company currently builds in-house</strong></li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>Does our grant have the ability to transform this project's trajectory?</strong>
        <br><a href="https://www.indiegogo.com/projects/for-get-http/x/267671">This project asked for such a grant one year ago</a>, so most definitely YES!</li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>Are you an influencer within the project?</strong>
        <br><a href="https://www.youtube.com/watch?v=A6JnGTXCkHA">I, am your father</a></li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>Will your ability to focus on it full-time move the project forward in some significant way?</strong>
        <br>I worked 4+ full time months in my spare time already to bring it where it is today. Last year I gave up that trend as it was breaking me up in two. It's simply not possible to handle such a project while maintaining a healthy life. Being able to focus full-time will make it or break it.</li>
    <li><i class="fa-li fa fa-pencil-square-o"></i><strong>Is this a project that people already use and has attracted a lot of attention?</strong>
        <br>Bits and pieces of this project's philosophy are already in use (e.g. <a href="https://github.com/basho/webmachine">Webmachine</a>) and has attracted attention, be it in the form of forks to non-Erlang languages, be it in the form of <a href="https://twitter.com/search?f=realtime&q=http-decision-diagram&src=typd">tweets</a>, <a href="http://www.reddit.com/r/programming/comments/1zsnde/thinking_about_quickly_writing_an_http_server/">reddit</a>, hacker news, prismatic... </li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>how much potential does it have?</strong>
        <br>If-this-then-that illustration:
        <ul>
            <li>if APIs will eat the world,</li>
            <li>and most APIs will share common characteristics (request-response pattern, authorization, handling bad/forbidden requests, handling content-negotiation, etc) if not a whole protocol (i.e. HTTP),</li>
            <li>and most bootstrapping (i.e. frameworks) starts and finishes at a (de)serializing messages, and not at a semantics level</li>
            <li>-</li>
            <li>then we won't move past evangelizing/learning the same "best" practices over and over again - <a href="http://lcsd05.cs.tamu.edu/slides/keynote.pdf">2004</a>, <a href="http://www.slideshare.net/jmusser/ten-reasons-developershateyourapi">2014</a> - nor moving past "HTTP is complicated" - <a href="http://vimeo.com/20784244#t=5m0s">2010</a>, <a href="http://hyperrest.github.io/2013-06-10-http-hell-no/">2013</a>.</li>
        </ul>
        <blockquote>Time to market a well-defined, standardized and trustworthy HTTP interface is key to delivering better web services!</blockquote></li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>Is it a project that [...] would be particularly exciting if successful?</strong>
        <br>YES! As a developer, I would be excited to stop looking at HTTP specs whenever I implement a web service. As an API owner, I would be excited to know that I rely on a trustworthy implementation of the HTTP standards and that my API is not as good as the best HTTP spec reader I have in the company, but as good as framework X version Y is - "We are ISO-foo-bar certified!".</li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>Is there a good plan for how these 3 months will be used?</strong>
        <br>See below.</li>
    <li><i class="fa-li fa fa-check-square-o"></i><strong>What indicators are there that you'll be able to pull it off?</strong>
        <br>&nbsp;
        <ul>
            <li>tested practices: <a href="http://seancribbs.com/tech/2012/01/16/webmachine-vs-grape/">state machines for protocols</a>, <a href="http://vimeo.com/20784244">webmachine</a>, <a href="https://www.youtube.com/watch?v=iPC6ArcGyL8">PEG</a>, <a href="https://www.youtube.com/watch?v=UqTlToUYK1E">DSLs</a>, etc.</li>
            <li>progress estimation: <a href="https://www.indiegogo.com/projects/for-get-http/x/267671">this project's v1.0.0 is beyond 50% done</a></li>
            <li>focused mind: while I slowed down pushing to github, <a href="http://osrc.dfm.io/andreineculau/#description">my mind is still very much into this</a></li>
            <li><a href="http://andreineculau.com">experience</a></li>
            <li>well defined MVP boundaries: this is not about performance, not about HTTP clients, not about HTTP proxies, not about caching mechanisms, etc.</li>
        </ul></li>
    </li>
</ul>

---


## In audio & video

<iframe src="//player.vimeo.com/video/78030876?portrait=0" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<iframe width="560" height="315" src="//www.youtube.com/embed/9Qnx1h5cQxo" frameborder="0" allowfullscreen></iframe>

---


## In detail

Read through [my attempt for a IndieGoGo crowd-funding](https://www.indiegogo.com/projects/for-get-http/x/267671). The facts, the drive, the goal, ... **everything is there**.

---

## 3 month plan

Click events for a brief description.

<iframe src="https://www.google.com/calendar/embed?title=for-GET%20HTTP%20%2F%20Stripe%20Open-Source%20Retreat&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=315&amp;wkst=2&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=ehramfqsnlftbcv2o18u50kvv4%40group.calendar.google.com&amp;color=%2328754E&amp;ctz=America%2FLos_Angeles&amp;dates=20140901%2F20141130" style=" border-width:0 " width="560" height="400" frameborder="0" scrolling="no"></iframe>

---


## Questions?

Disqus bellow or [email](mailto:andrei.neculau@gmail.com) is your friend.

Fingers crossed.
