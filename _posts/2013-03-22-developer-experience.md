---
layout: post
title: Developer experience
categories: consume serve
tags: developer experience convenience client
published: true
comments: true
share: true
---

Ronnie Mitra [@mitraman](https://twitter.com/mitraman) had a consistent talk at [@nordicapis](https://twitter.com/nordicapis) (Stockholm Mar'21 2013), with a catchy title **Developer Experience** - [slides](http://www.slideshare.net/rnewton/the-i-is-for-interaction), [story](//storify.com/andreineculau/developer-experience), [video](http://www.youtube.com/watch?v=dQPRELMJOPA). If you missed it, the essence is on his [blog post](http://mitraman.wordpress.com/tag/developer-experience/).

He had almost a "philosophy of science" touch, talking about consuming and designing (with the purpose of serving) in terms of fitting [a square peg in a round hole](http://en.wikipedia.org/wiki/Square_peg_in_a_round_hole) - ok, triangular hole in his slides. The developer that consumes comes with his mind set on a specific pattern on consumption, a specific set of tools, with their own advantages and quirks etc. Meanwhile the server group comes with its mind set on a specific pattern of delivering API messages, on a specific set of tools, also with their own advantages and quirks, etc.

This is a broad subject, with lots of nit-pick opinions, and others have touched on this topic from the holistic perspective of an API.

I'd like to build on the question I had in the end of his talk. I'd like to focus on a subtle detail with respect to consumption - the object. **Subject: developer. Predicate: consumes. Object: ?**

## A. Developer consumes the API

This is probably very clear and unquestionable to many. After all, you either serve or consume an API. You either publish or read a newspaper.

With this in mind, it is rather obvious that you need to have early feedback on your API, you need to design the API with the developer in mind, you have to keep in mind a whole stack of constraints or quirks that different programming languages might have, you will soon realize that very few understand HTTP, and even fewer understand REST, hypermedia, etc.

If you keep being stubborn because the HTTP specs, or some HTTP/REST authority says *do it like this*, you will soon be called dogmatic. You are ignoring the reality of the developer. You are ignoring simplicity. You are ignoring convenience. All those things that have no metrics, but which are so [bikeshedding](http://en.wikipedia.org/wiki/Parkinson's_law_of_triviality) that everyone will have an opinion about, and have no doubt - the majority will win. And with that, all of your long-term vision regarding a flexible, decoupled, frictionless and ever-growing API crumbles under the pressure.

It comes as no surprise then to hear that you should just stick to the design patterns of the *defacto standards* as Andreas Krohn [@andreaskrohn](https://twitter.com/andreaskrohn) calls [Twitter and Facebook](https://twitter.com/ABeanSits/status/314650447187156992/photo/1). And he, as a [Dopter](https://twitter.com/dopterse) consultant, is totally right to do so in a world where everything has to be delivered yesterday, where nobody has the patience to listen, nor think. But have no doubt that undesirable consequences are around the corner, blowing hard [on your house of impatient matches](http://www.youtube.com/watch?v=Nh11A41klL4).

<blockquote class="twitter-tweet" data-cards="hidden"><p>OH: "I don't have the patience to wait for you to think on your own."</p>&mdash; Jakob Sievers (@cannedprimates) <a href="https://twitter.com/cannedprimates/status/302315164978520065">February 15, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## B. Developer consumes the API **client**

Does anyone talk about opening up a socket to communicate with an API these days? OK, maybe that's too extreme. Do you see developers coding against CURL these days? Yes, maybe you see documentation sites giving CURL examples for the simple reason that it's a very slim and descriptive syntax, but not because developers use a CURL binding library. So I hope you agree - no, the masses are not coding so low-level.

Instead, the masses are coding with all sorts of sugary libraries - either they come with a nice syntax, either they automate some steps, they map ORMs to server-side resources, etc. Is this wrong? Of course not. It's not a matter of right and wrong. But are they designed with your API in mind? Nope. Are they designed with RPC in mind? Are they designed with HTTP in mind? Are they designed with REST in mind? Nope. Most are simply API undesigned. They saw Twitter's API, it says REST, spent some time building a mental model, implemented it, et voilá! It can be the sweetest syntax ever. It can blow your mind. But does it understand your API? I would guess not.

<blockquote class="twitter-tweet" data-cards="hidden"><p>@<a href="https://twitter.com/andreineculau">andreineculau</a> I've think of SDKs as a local interface for the remote web API interface, so I think that fits what you are describing.</p>&mdash; Ronnie Mitra (@mitraman) <a href="https://twitter.com/mitraman/status/315041516647223296">March 22, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So my next question comes natural - if it was any different, you wouldn't see many of the top API publishers coming up with their own API clients, would you? [When the API isn't good enough](https://www.braintreepayments.com/braintrust/when-rest-isnt-good-enough) you need an API client. And it shouldn't be an exceptional situation - stop thinking "I don't need an API client until I'm forced to build one". If you were in another sector, you would be more interested in how your product reaches the end-consumers. Why leave the API client to chance? Why leave API consumption to chance?

[Like I said](http://www.youtube.com/watch?v=Nh6VeuvVRdQ) in Paris Dec'4 2012 [@apidays2012](https://twitter.com/apidays2012), like Ronnie said in Stockholm, and like many others in the API community highlight - focus on how your API is being consumed. If you have a perfect API, except that it is not easy to be consumed, its perfection is worthless. Beauty in the eye of the beholder, with only you holding the *be*.

There is one difference though between my point of view and others - don't start with how you *consume*, but start with *envision*, *spec*, *mock* and then play hard with *consume*. It is still **your API**. *You* know if and how you benefit from caching, granularity of resource, from the different API styles, the different formats JSON, XML, HTML, ProtoBuf... You own **your API**, you're responsible for it. Don't let an undesigned API client decide your API's future.

## RESTit / HyperREST client

On the same day as @nordicapis, I've release one of my "gems" created at [@klarna](https://twitter.com/klarna) called RESTit. It's a slim hypermedia client with a jQuery-like fluent interface, written in node.js. It's a prototype, mainly for eliciting API client requirements. I'll now care for it in my spare time as the [HyperREST client](https://github.com/hyperrest/client).

I'm only mentioning it as part of this topic because that's how I know that a developer consumes the API client, not the API. That's the interface that they care for. Beyond that, it's mostly data structures (remember someone saying design your media-types?), and some relations - if we're talking about HyperREST. Media-types and relations are not to be ignored - on the contrary - but they won't be giving birth to clashes and friction between those that consume and those that serve the API. What's there to be so controversial - undefined or null, under_score or camelCase, flat or nested structures, URI relations or not, Unix or ISO timestamps? Some of those discussions will popup, you will have to spend proper time on naming, some will agree, some won't agree with the outcome, but nobody will end up hating it either.

CLOC-wise, RESTit is small - put together it's a 1-2 weeks effort . Thought-wise, we're talking countless sleepless nights. Gain-wise just imagine doing the same requests without RESTit and see how much you need to write. Given a static config, RESTit can save lots more. And it doesn't save just lines of code, but also time and energy of the developer to understand the API, HTTP, hypermedia, all that stuff. Indeed, now it has to learn the *RESTit API*, the interface, the features, the patterns, but in my view it's like comparing an ant with an eleph-ant.

Just think how many people can understand how a browser works, and even talk on a high-level about HTTP, GET, POST, URI, caching even and how many of those know how to can explain the Accept header, how many can write a function to parse it, talk about the differences between GET and POST, about URI templates, about CORS... please stop me when you want...

## Simplicity

> I think most people just make the mistake that it should be simple to design simple things. In reality, the effort required to design something is inversely proportional to the simplicity of the result. As architectural styles go, REST is very simple. *Roy Fielding [#](http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)*

## TL;DR

Ever heard of [objet petit a](http://en.wikipedia.org/wiki/Objet_petit_a) ? Well, in the case of APIs, it stands for the API client that nobody has, nobody can describe, but everybody wants. Nobody cares about your API. If they were, you would hear them talk about network performance issues, caching issues, automated flows, namings, decoupling. If you were, you wouldn't just give in to non-sense for the sake of Backbone.js convenience.
