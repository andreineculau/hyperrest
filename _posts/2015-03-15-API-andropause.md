---
layout: post
title: API andropause
categories: envision improve
tags: http api design rant
published: true
comments: true
share: true
---

I've been holding off for more than a year now from the "APIs will eat the world" environment.

Not to my surprise, the experience is not any different than holding off from Twitter.

<blockquote class="twitter-tweet" lang="en"><p>I haven&#39;t been reading tweets since Oct27 (~2months ago), what did I miss re:HTTP/API/hypermedia/web/js/nodejs/erlang/elixir? Fill me in :)</p>&mdash; Andrei Neculau (@andreineculau) <a href="https://twitter.com/andreineculau/status/546463737956552704">December 21, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

> A silent experience, that is.

## We suck at HTTP.

[Deane Barker](https://www.linkedin.com/in/deane) [spills his heart out](http://gadgetopia.com/post/9236): we suck. Some years ago, maybe I would have applauded the rant and its condecending tone. Truth be told, it's refreshing to read even now. But although Deane obviously has a history, and even better a long list of good things to teach, I can only take a step aside from his writings.

[My stance didn't change since 2013.](http://hyperrest.github.io/2013-06-10-http-hell-no/#content)

You cannot expect everyone to learn the entire history of X, and then write you a summary. Every day, without mistake. You don't quiz your employers every day about what they know and what they don't. School was like that for some of us, and we failed miserably at getting the gist, didn't we? The boring parts - numbers, encodings, names - should all be put aside. Confusions too. Encapsulated. Automated. All of it!

Afterall, if you're working against an [enigma](http://en.wikipedia.org/wiki/Enigma_machine), you don't stand a chance without a machine.

Enough philosophy. Same rants, same surreal expectations, [same verbose testing techniques](http://hyperrest.github.io/2014-06-08-KATT/#content) and I still haven't heard of anyone being [hired to fix this mess](http://hyperrest.github.io/2014-05-30-stripe-open-source-retreat/#content) nor [crowd-funded](https://www.indiegogo.com/projects/for-get-http). After all, these technicalities have nothing on coolness, agility, meetings, hip culture, etc. just that they would save tons of time and money and time and money we have plenty of (**ironic**). [Comment #32](http://gadgetopia.com/post/9236#div-comment-337349) made me laugh; it's a good insight. Actually the whole list of comments, mostly ignoring Deane's writing and focusing on some HTTP status code, is rather symbolic and summarizes properly a situation of confusion, and pathetic prioritization.

> If you want to understand (the stagnation) of API development, *The imitation game* did a pretty good job depicting software development in general. Meet the *fiddler* that dreams, imagines, thinks N chess moves ahead, meet the *overseer* who cannot comprehend anything, but can get mad and controls others, and meet the *butter* - those in between, with no real power, with no real logic.

<iframe width="854" height="510" src="https://www.youtube.com/embed/MM47hsaYWZE" frameborder="0" allowfullscreen></iframe>

## Who cares?

While there's Deane&co, people that actually grasp the abstractions, and chew on what the past taught us, there are the ones like swax that talk about [religions and doctrines](http://swaxblog.tumblr.com/post/112611863175/who-cares-about-get-vs-post-norest) and don't see the forest behind the trees. Put them together, [and hell breaks loose](https://news.ycombinator.com/item?id=9138700).

The cherry-on-the-cake came from Dropbox, you know - the file storage service that has convoluted "endpoints" stiched together in a JSON-RPC-like "REST" API. This month, they decided to brag about their, laborious and meticulous I'm sure..., analysis of "performance, simplicity, and developer ergonomics", in a post about [the limitations of GET](https://blogs.dropbox.com/developers/2015/03/limitations-of-the-get-method-in-http/).

Just like [Christian in comment #32 above](http://gadgetopia.com/post/9236#div-comment-337349), I wonder if they ever heard about X-HTTP-Method-Override. If they did, I'm sure they would've bragged about it, right? But they didn't.

```
> GET /dropbox/api/foo/1?bar=2&qux=3

can be equivalent to

> POST /dropbox/api/foo/1
> X-HTTP-Method-Override: GET
> Content-Type: application/x-www-form-urlencoded
bar=2&qux=3
```

Instead, F. Metsys decides to surround us in fog about idempotency (another concept that is never mentioned, although described), benefits vs costs, query string (URL) size limitations...

> "HTTP was developed for a specific hierarchical document storage and retrieval use case, so it’s no surprise that it doesn’t fit every API perfectly. Maybe we shouldn’t let HTTP’s restrictions influence our API design too much." *F. Metsys, Dropbox*

Pity. That's the word.

Pity that 4 years after I have bumped into X-HTTP-Method-Override (and I was late to the game anyway), people (and people from the higher grounds of Dropbox and the likes) ignore the circular wheel, invent the square one and preach about their "invention".

> [How does it feel when things get re-invented? Click here and find out](http://boxcar2d.com/)

Regardless of the pityness, the sad part is that few really care, even fewer have a good sense of how to channel their energy, and fewer and fewer are left with any energy at all. Welcome to the API andropause.

---

**UPDATE: 2015-03-26**: Dropbox continues to disrespect developer neurons. Or to look at the half full glass: others follow CollegeHumour, I follow the Dropbox Developer Blog. After advocating POST over GET when URLs get "too long", [now they talk about JSON in URLs](https://blogs.dropbox.com/developers/2015/03/json-in-urls/):

* MEANING in URLs ?!? they are opaque! Talk about bugs in client and server software, but not about something that is not there in the first place: meaning.
* encoding JSON in the query string ?!? weren't you just complaining about the URL length limitations?
* serializing to JSON and then to form-urlencoded, because alternatives like `column=1,2`, `column=1&column=2`, `column[one]=1` are closer to "workarounds" than "standards" ?!?

At least they got one thing right, which Stripe infected the whole API-doc market with: stop thinking of APIs through the eyes of "how would it look like as a cURL request?" Those who still do, should be asked "does your website work in IE?" Tools evolve, encapsulations and abstractions evolve, don't keep users prisoners to stone age interfaces just because they are ubiquitous.
