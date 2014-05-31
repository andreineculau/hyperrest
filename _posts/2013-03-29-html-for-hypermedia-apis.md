---
layout: post
title: HTML for hypermedia APIs
categories: envision
tags: html experience client
published: true
---

Gustaf Nilsson Kotte [@gustaf_nk](https://twitter.com/gustaf_nk) also had a consistent talk at [@nordicapis](https://twitter.com/nordicapis) (Stockholm Mar'21 2013), touching on 6 topics all at once: **HTML, Hypermedia, APIs, Adaptive, Web, Design** - [slides](http://www.slideshare.net/GustafKotte/html-hypermedia-apis-and-adaptive-web-design-nordic-apis), [video](http://www.youtube.com/watch?v=YCjaOrIhYGg). If you missed it, the essence is on [@jayway](https://twitter.com/jayway)'s [blog post](http://www.jayway.com/?p=13994).

He followed in the footsteps of Jon Moore [@jon_moore](https://twitter.com/jon_moore) bringing the topic of [using HTML as the media type for your API](http://codeartisan.blogspot.se/2012/07/using-html-as-media-type-for-your-api.html) with a hands-on twist of adaptive web design. To summarize, he did a great work to keep it simple, valuable and most of all doable. He KITT - kept it to the tools.

<blockquote class="twitter-tweet" data-cards="hidden"><p>.@<a href="https://twitter.com/gustaf_nk">gustaf_nk</a> inspires me w/ bravery to do my upcoming live demo by doing one himself <a href="https://twitter.com/search/%23nordicapis">#nordicapis</a> <a href="http://t.co/EcIOWdlbgL" title="http://twitter.com/travisspencer/status/314723243539955713/photo/1">twitter.com/travisspencer/…</a></p>&mdash; Travis Spencer (@travisspencer) <a href="https://twitter.com/travisspencer/status/314723243539955713">March 21, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-cards="hidden"><p>@<a href="https://twitter.com/andreineculau">andreineculau</a> not following you there…</p>&mdash; Andreas Krohn (@andreaskrohn) <a href="https://twitter.com/andreaskrohn/status/314725849502990337">March 21, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I had a negative outburst though, focused on the first term alone - HTML - and with the 140 limit, it came out as fuzzy as hell. To be honest, I've just "[bleep censored](http://en.wikipedia.org/wiki/Bleep_censor)" my way through his other points in the talk. It would have been a shame not to, since he had *very* good points that I almost take for granted - and I know it's not easy to argue for them. But back to our friend - the HyperText Markup Language.

## HTML for APIs - why Yay!

* HTML has rich semantics
* HTML has hypermedia support
* HTML is very much standardized
* HTML has good tools

You have to be ignorant not to acknowledge the pros - [more about them by Jon Moore](http://codeartisan.blogspot.se/2012/07/using-html-as-media-type-for-your-api.html).

## HTML for APIs - why Yay!-ish

But you'd also be ignorant if you don't challenge the pros and think about the cons.

* HTML has rich semantics - what do you actually gain from them?
* HTML has hypermedia support - does it still have support for the whole of HTTP though?
* HTML is very much standardized - standardized ~~for presentation~~ document semantics, yes, but do you need ~~presentation~~ document semantics?
* HTML has good tools - are they the best tools for your goal though?

[Gustaf lists a good amount of problems when using HTML for your API](http://www.jayway.com/?p=13994). Just think how many of those problems you had before thinking of using HTML for your APIs.

<div class="well text-center">
    <img src="http://imgs.xkcd.com/comics/tags.png" class="img-polaroid">
</div>

If we look at the rich semantics of those tags, tags, tags:

* &lt;head&gt;, &lt;meta&gt;, &lt;link&gt; and &lt;body&gt; - if there's anything meta, then it should go in the HTTP headers, but with the history of web servers, you could use &lt;meta&gt; to emulate HTTP headers or add additional data that is not to be rendered. I could add that [links are not just meta-data](https://groups.google.com/forum/?fromgroups=#!searchin/api-craft/_links/api-craft/XnpDEm94ybI/it7FJ1iW_5QJ), but that's something that takes a while to digest, and I'd digress
* &lt;link&gt; - granted
* &lt;title&gt; - good arguments rarely start with "if", but to play along - if X has a title, then place it in this special tag?! Is title considered meta-data? And why not create special tags for each attribute then, or to be fair - if it we were talking about another media-type, would you ask for a title markup?
* &lt;base&gt; - when did relative links become ambiguous? Links are relative to the resource URI and that's it. It's convenient though when we think how HTML gets created and served, but that doesn't apply to machine-to-machine APIs, does it?
* &lt;ol&gt;, &lt;ul&gt; - semi-granted, ever had to distinguish between ordered and unordered lists? and since it's HTML, the items are always ordered anyway, just not ~~for *presentation*~~ presented as such.
* &lt;dl&gt; - granted
* &lt;form&gt; - granted
* &lt;style&gt;, &lt;script&gt;, &lt;noscript&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;hgroup&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;blockquote&gt;, &lt;address&gt;, &lt;p&gt;, &lt;pre&gt;, &lt;span&gt;, &lt;figure&gt;, &lt;figurecaption&gt;, &lt;i&gt;, &lt;b&gt;, &lt;em&gt;, &lt;s&gt;, &lt;u&gt;, &lt;img&gt;, &lt;iframe&gt;, &lt;embed&gt;, &lt;object&gt;, &lt;canvas&gt;, &lt;audio&gt;, &lt;video&gt;, etc. - `(o.O)`

Let me explain my confused face `(o.O)`. When exactly would you request support for these ~~presentation~~ document semantics? Obviously in Gustaf's case, but not in machine-to-machine cases.

> Looking back across this list, sure, there's a lot of things that might not be immediately useful, but there's actually quite a large portion of HTML that offers semantics I'd immediately find useful in a programmatic API. *Jon Moore [#](http://codeartisan.blogspot.se/2012/07/using-html-as-media-type-for-your-api.html)*

I count a handful of items to consider, highlighting the hypermedia ones, and trash the rest.

> We basically get to reap the benefit of many years of evolution in HTML, where its expressive power has grown and been refined over the years. You'll end up repeating most of the HTML standardization process to get a new media type up to the same level of expressiveness. *Jon Moore [#](http://codeartisan.blogspot.se/2012/07/using-html-as-media-type-for-your-api.html)*

Sure, *if* you're looking for ~~*presentation*~~ document expressiveness! With the exception of Gustaf, unless I'm ignorant towards some underground online or offline community, I haven't heard anyone else looking for it or, even better, making a good case from using it.

"human + browser = client for my HTML API" is a very good yay-ish. So you are designing your API not just around the HTML media-type, but around the category of API clients known as browsers. Will you be able to `DELETE`, `PUT`, `PATCH`, `OPTIONS` or whatever custom HTTP method? Will you be able to decide the HTTP request's media-type? Will you be able to trigger a cache-free request? Will you be able to set say `Accept-Language` (just for your API)? Shall I go on?

Now, some of you will tell me *pff, like I couldn't live without that?!*. The question here is not whether you can live or not without that, but instead:

* how much of that will you re-invent soon? "_method", ".json", /en-us", "?randomCacheKiller=.." ?
* are you aware of the benefits these HTTP bits have on your API?
* are you aware that you're losing *standardized* freedom?

## HTML for APIs - why Nay!

To continue where I left off in the previous paragraph, I guess the answer for the majority it's around "a lot, not really, not really". That alone is something that puts me off in recommending you HTML for your APIs.

When you don't know what you're getting yourself into, choose whatever gives you more freedom. That may sound counter-intuitive because the habit today is to be recommended whatever you are able to understand, as being the best available option. What, you don't know how to make pizza? Here's a pizza kit. What, you don't know how to paint? Don't learn, just press the random-drawing button on this iPad app. What, you don't know how to read? Here's an audio book. What, you don't know how to use HTTP methods and headers? Then just screw with the URI. Those answers may be the right ones in a variety of circumstances, but not when you're looking to make an investment. And your API *is* an investment. Learn how to make a pizza dough, and you'll know how to make lots more. Learn how to read, and you'll be able to read more than just one book.

If you go camping for the first time, do you just go with a knife, or you go with a Swiss army knife? I'd recommend the second option without blinking. How would you feel to hear "this knife is so good because it hasn't changed in a long time, and everyone knows how to use it, and you can do so many things with it"? Would you fall for it and go camping without being able to open a bottle, a can, fix a lose screw, etc? But we're getting verbose here, so let's back up.

> Imagine trying to write a media type to document Facebook's functionality. You'd end up needing to change the spec daily *Jon Moore [#](http://codeartisan.blogspot.se/2012/07/using-html-as-media-type-for-your-api.html)*

I'm convinced [that media-types must carry semantics and syntax](http://blog.programmableweb.com/2011/11/18/rest-api-design-putting-the-type-in-content-type/). In the case of HTML, we're talking mostly ~~presentation~~ document semantics. ~~Present~~ Mark &lt;em&gt; content as italic, present &lt;li&gt; inside &lt;ol&gt; by prepending a counter, etc. But you need more than that - you need to know what is inside that &lt;em&gt;, or in that &lt;ol&gt;, what is an address, what is a contact, what is a car, what is a garage, etc. Do you need standards? Yes, you need them in the sense that you're gaining a lot by talking the same language with others, but do you need to create and impose a global standard definition of a car before you can make use of the concept of a car? I'd say no. So I'm sold when it comes to vendor media-types.

<div class="well text-center">
    <img src="http://imgs.xkcd.com/comics/standards.png" class="img-polaroid">
</div>

It's a nasty deterrent to say that you'd have *to change the spec daily*, because

* first of all - it's not me, an API consumer, that has to document a representation of an API publisher
* Facebook's Graph API doesn't have a versioning scheme, thus it's implicit that it actually doesn't change often (especially in a breaking way). It would be chaotic if it did.
* it would be smoother if that would be the case, and Facebook would maintain a couple of versioned media-types than what Facebook is doing today - introducing [breaking changes](https://developers.facebook.com/roadmap/completed-changes/)

The fact is that a car can have very different semantics depending on the context. In a sale context, it means production year, asking price, mileage, etc. In a history context, it means release year, variants, results for safety tests, etc. Until we are able to refer to standards that define a car in specific context, let's just be accurate that release year for Andrei, a non-native English speaker with no interest in cars, actually means production year for Volvo's online car shop. If that means that you will end up creating lots of "application/vnd.you.concept1+v1-html" documents, and that only some people will understand your language, what are you losing? That newcomers will have to learn that language? Well, weren't they going to be *surprised* by the language differences anyway, after they assume in the beginning that it is the same language? That not everyone understands your language? Well, is it your goal to evangelize your language, or to stick to some common language denominator - mamma and dadda? I would put my money on - you want to have a clear and flexible API.

I'll tackle vendor media-types and the related topics another time, though. It suffices to say that, in my humble opinion, it's a waste of time to discuss HTML over XML over JSON over HAL, etc. For a crawler, it would be good to know how to look for links. For an API client though, you need more than that or else it's not called consuming - it's called assuming. If you want to consume a clear and flexible API, make use of vendor media-types.

> An escalator can never break; it can only become stairs *Mitch Hedberg*

Before I end this post, there's one more thing - the devil in disguise - the presentation. Gustaf ended his talk in a great way - what do you have to lose? And if you don't want to lose - plan your exit -, and you're good to go. One exit strategy being publish both www.example.com and api.example.com. Start serving the same content to both, but if you ever want to break away your website from your API, the API entry point is not dependent on the website entry point.

That's smart, but having one API to rule both human and machine consumption was one of the big selling points. But that's a far away exit strategy, right? Well, I don't know who your web people are, but the big majority of web sites and people, that I know, wants to be in charge of those divs and spans. Those HTML tags are important for presentation, and some stuff cannot be done easily just with CSS. At least it's not easy if you don't have a Johan Borestad  [@borestad](https://twitter.com/borestad) in your team working with CSS as if it's the alpha and omega of the web's presentation :) If you haven't lived the times when you were crawling and extracting data with XPath, then know that presentation is your biggest enemy - there will always be a need to move or change a HTML tag because of browser incompatibility, bugs, or developer's lack of knowledge. And that need is the one that will change the spec daily.

## TL;DR

Can you argue for both the pros and the cons in using HTML for your APIs, [like Gustaf does](http://www.jayway.com/?p=13994)? If you cannot, then I also cannot believe you're taking the best decision for your APIs' sake. You're taking the best decision for your own sake. You're believing in your decision because you choose to believe it, not because you're convinced by it.

Update 2013-04-21: Jon Moore correctly spotted that I referred to HTML as having *presentation*, instead of *document* semantics. I corrected that, but my error had a bit of a involuntary meaning - how many websites do you see using HTML as a document markup, instead of presentation markup?
