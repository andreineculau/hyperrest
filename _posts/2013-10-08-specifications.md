---
layout: post
title: Specifications
categories: envision improve
tags: specification implementation design
published: true
comments: true
share: true
---

I gave a talk [@nordicapis](https://twitter.com/nordicapis) last month - thank you [@andreaskrohn](https://twitter.com/andreaskrohn) for the opportunity!

I don't have a problem with talking in public, and apparently not with [choosing catchy titles](https://twitter.com/tzetze/status/380662931475554305) either, but [knowing and getting in touch with your audience is a work in progress](https://twitter.com/tzetze/status/380677709552050176). But beyond my talking skills, given my audience ended up not being tech (my threshold: only a few heard of HTTPBIS), I stopped at making one point clear: specifications without a reference implementation are bound to have low-quality implementations.

And you can see that beyond doubt with HTTP. Most implementations cover one part, [the messaging](http://tools.ietf.org/html/draft-ietf-httpbis-p1-messaging), which is less than ~1/4th of the whole specification, and leave aside the biggest chunk, [the semantics](http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics). And going even deeper, most implementations cover only a subset, are opinionated, or are not up to par with the specification of HTTP messaging.

With that in mind, if you check the specification of HTTP messaging and semantics, you get your hands on the ABNF grammar, which will allow you to parse without a problem. Parse into what (i.e. which AST), how to handle the output, how to stringify back, etc is outside of the spec, and there is no reference implementation being mentioned.


## URL/URI

The same, just some ABNF grammar, goes with [IETF's spec for URIs](http://tools.ietf.org/html/rfc3986#appendix-A).

In contrast, have a look at [WHATWG's URL spec](http://url.spec.whatwg.org). I wasn't aware of it until recently and it just blew my mind. Not in a positive way.

<blockquote class="twitter-tweet" data-cards="hidden"><p>Instead of assuming that people are dumb, ignorant, and making mistakes, assume they are smart, doing their best, and that you lack context.</p>&mdash; Nicholas C. Zakas (@slicknet) <a href="https://twitter.com/slicknet/statuses/300625746966241280">February 10, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I'm trying not to judge, specifically because I have no idea of the history/goal of this spec, but I cannot help it - I have some hands-on questions:

1. *Align RFC 3986 and RFC 3987 with contemporary implementations and obsolete them in the process.*  
- this is merely a confirmation of my hypothesis. The IETF specs have no reference implementation, and thus had "the bad luck" of being poorly implemented. They happened also because of lack of knowledge among developers of what a grammar parse is, but primarily it's an esoteric thing that the spec does not mention black on white for anyone to understand: "in order to parse a URI, use an ABNF or higher-level parser based on this grammar spec". I won't comment on it, but WHATWG is now obviously doing things asswards: let's write a spec based on the major implementations. Leaving that aside, the question is: **how come a 2005 RFC is old? what has aged about it?**

2. Given that there is an ABNF grammar already, the easiest way to see amendments, I think, is to have an updated ABNF grammar and run a diff generator. But it's missing. **What is the diff between your spec and the RFCs (in as few words as possible) ?**

3. *URL parsing needs to become as solid as HTML parsing.*  
I have no idea **why an ABNF/similar parser is less *solid* than the pseudocode in WHATWG's spec**, do you? In practice, more devs will know how to read and rewrite that pseudocode in their language of choice than knowing about ABNF, about generating grammar parsers beyond regular expressions, yes, but the chances that the manual process of writing that code is working identically as the pseudocode are considerably lower than the chances of having two abstract pieces of software (the grammar-parser generators) outputting the same artifact given a piece of grammar and some content IMO.

4. On the same topic of *solid*, if there's one obvious thing that grossly lacks from most specs, with one pleasant exception [URI Template](https://github.com/uri-templates/uritemplate-test), is language-agnostic tests. **Where are the tests for this solid way of parsing URLs?**

5. *Standardize on the term URL.*  
Deciding on terms and semantics is never about a popularity contest, and specifically speaking, there is nothing confusing about those terms. We just lack the skills to explain them. Not many understand the difference between a blood orange and a red grapefruit, but we don't go around running a popularity contest "Grapefruit out. Only oranges from now on". Maybe the difference is not of high importance in the majority of cases, but if that is the case, specificity is not important, then the more generic term should win.

<blockquote class="twitter-tweet" data-cards="hidden"><p><a href="https://twitter.com/urlstandard">@urlstandard</a> 1) is there any diff with regards to the ABNF at <a href="http://t.co/kZDBnMc8zj">http://t.co/kZDBnMc8zj</a> ?</p>&mdash; Andrei Neculau (@andreineculau) <a href="https://twitter.com/andreineculau/statuses/387607999897796608">October 8, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-cards="hidden"><p><a href="https://twitter.com/urlstandard">@urlstandard</a> 2) could I get some insight as to why the spec for parsing URLs is a pseudocode, instead of a grammar?</p>&mdash; Andrei Neculau (@andreineculau) <a href="https://twitter.com/andreineculau/statuses/387608172736704512">October 8, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


## Dead end

I don't know how well I made my point in my "Forget HTTP" talk, but the purpose of successful software specification and development is **to forget**. Given a specification, given tests, given a reference implementation that passes all the tests, then a specification and its duplicate implementations in various programming languages would become a black box with different levels of abstraction, with its dark corners known deeply by a few "experts", and with a highly usable interface for the masses.

A spec like WHATWG's is asswards. Instead of properly making use of abstractions, it surfaces all of the implementation details, in such a way that the software implementation is only useful for this spec alone (in contrast with using a grammar-parser generator and just feeding it one grammar per spec).

---

If you want to read a bit more on a possible "solution" (it's actually just a more blind/strict/closer implementation to the specification) to the HTTP mess, the one I put forward as the dog food that I am eating at the moment, you can read [here](http://hyperrest.github.io/2013-06-10-http-hell-no/) and continue [here](https://github.com/for-GET/README).

<blockquote class="twitter-tweet" data-conversation="none"><p><a href="https://twitter.com/andreineculau">@andreineculau</a> % but i missed a second part of your &quot;wat&quot; talk about your opinions, what can be better for that job. That&#39;s all.</p>&mdash; Heilig Szabolcs (@tzetze) <a href="https://twitter.com/tzetze/statuses/380727899365441537">September 19, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-cards="hidden"><p>If you cannot forget the ”Forget HTTP” talk (for better or worse) you can read in peace if you GET <a href="http://t.co/jTT5O3zOX4">http://t.co/jTT5O3zOX4</a> <a href="https://twitter.com/search?q=%23nordicapis&amp;src=hash">#nordicapis</a> <a href="https://twitter.com/search?q=%23http&amp;src=hash">#http</a></p>&mdash; Andrei Neculau (@andreineculau) <a href="https://twitter.com/andreineculau/statuses/380696523220463616">September 19, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
