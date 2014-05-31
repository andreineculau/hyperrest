---
layout: post
title: Man overboard!
categories: envision
tags: specification implementation client server rfc
published: true
comments: true
share: true
---

HyperREST.com came out as a follow-up of a talk at APIdays 2013, Paris.

I wanted to take step by step what I have accumulated in 2 years of designing REST (hypermedia, not web) APIs and share.

<iframe width="560" height="315" src="//www.youtube.com/embed/Nh6VeuvVRdQ" frameborder="0" allowfullscreen></iframe>

More than 3/4 of the content for the menu above already exists. In my head. And it wouldn't take that much time to put down.


## The problem is REST people lie

.. by omission. We might not even be aware of it, but we lack a solid foundation to be convincing when HTTP is the de facto protocol of REST. And [HTTP is hell no](2013-06-10-http-is-hell-no).

TL;DR It's not the specification, it's the implementation that is usually both hugely limited and opinionated to be diplomatic (exceptions exists). Just take a look at how your programming language of choice and/or your HTTP library is implemented.

You'll usually see

- a manually-written parser focusing on the message (in comparison to the specification having cca. 500 lines worth of ABNF grammar rules),
- the parser triggering an error if the method is not among the usual suspects (and sell you later that they bring [PATCH "support"](https://github.com/erlang/otp/blob/bab47a5fc14f5093ca0c9deca4297d54ea722eb8/lib/inets/src/http_server/httpd_request.erl#L85)),
- nothing regarding parsing headers
- nothing regarding content negotiation (e.g. [mimeparse](https://code.google.com/p/mimeparse/))
- nothing regarding caching
- code that you don't want to debug, ever!


## The problem is HTTP implementations

Even though I can fill in HyperREST.com with content, I would not do anyone a favour.

Before I do that, I want and need a reference implementation of HTTP that is simple to grasp, albeit not-opinionated and comprehensive, and also simple to port to any programming language (probably via C and bindings).

When I will be able to tell you that you have a proper tool, or that it is simple to build a proper tool, then I will happily enter [delirium tremens](http://en.wikipedia.org/wiki/Delirium_tremens) and tell you about this architecture style. Until then, **REST is a man overboard** in my book.


## Talk, follow-up or even contribute!

My effort to [forget HTTP](https://github.com/for-GET/README) is open-source. When I feel like it, I'll also cover the progress on HyperREST.com with a post or two, but if you find your way to contribute to the for-GET repositories, it will be more than appreciated.

**If you want to hear me on HTTP or REST (hypermedia), or any of the missing content, or you just have questions, then [contact me](http://andreineculau.com)!**
