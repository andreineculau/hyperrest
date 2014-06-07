---
layout: post
title: REST API concepts
categories: envision spec
tags: terminology
published: true
comments: true
share: true
---

Every now and then I bump into these terms, and [it's not easy to grasp the definitions in a blink of an eye](https://groups.google.com/forum/#!topic/api-craft/ahxTncZZn2I). It's not easy because, while REST models real life concepts in a simple manner, we are not accustomed to so much semantics in daily programming. Everything is mostly data, text, a class, an instance, an object, etc. This post is mainly a note-to-self, but hopefully it has a good-enough analogy that you can use as well.

> Some things might be off, and there <s>might</s> surely are better analogies, so I'd be happy if you leave a comment and set me straight. *disclaimer*

My analogy has some tight <i class="icon-rest-coupling"> </i> coupling with the [HyperREST API icons](http://andreineculau.github.com/hyperrest-api-icons/) that I patched together a couple of weeks ago. The [Font Awesome icons](http://fortawesome.github.com/Font-Awesome/) came in like a glove.

<i class="fa fa-api-entity"> </i> Entity

<i class="fa fa-api-resource"> </i> Resource

<i class="fa fa-api-representation"> </i> Representation

<i class="fa fa-http-content-type"> </i> Content-Type

<i class="fa fa-api-payload"> </i> Payload

---


## Entity m:n Resource

An <i class="fa fa-api-entity"> </i> entity may be your invoice (the concept, not the paper) for electricity for 2013 Mar 1-31st. The <i class="fa fa-api-resource"> </i> resource, on the other hand, holds your latest invoice. So the same resource, this inbox that you access every month, will link to some magical/undefined concept that is behind the curtains of the electrical company, that we refer to as *the invoice*.

If you're stuck thinking in terms of URIs, here goes. There's `https://example.com/invoices/{id}` and then there's `https://example.com/invoices/latest`. Behind the curtains there's a DB, and there's a table called Invoices with a primary key `id`. While the `https://example.com/invoices/{id}` resource may have at times a 1:1 relation to the DB's Invoices\#{id} record, the resource that is identified by `https://example.com/invoices/latest` will not - it will link to a different entity, based on a variety of factors like the current timestamp, or the Authorization header, while maintaining its definition intact "the latest invoice".

> The same <i class="fa fa-api-entity"> </i> entity can be used by multiple <i class="fa fa-api-resource"> </i> resources,  
and the same <i class="fa fa-api-resource"> </i> resource can use multiple <i class="fa fa-api-entity"> </i> entities.  
Neither the former, nor the latter, identifies the other.

---


## Resource 1:n Representation

"The latest invoice" <i class="fa fa-api-resource"> </i> resource can be represented by a webpage, an email message, a PDF document, a paper invoice, an electronic invoice in your online bank account, an audio invoice for the visually impaired, etc. These are all <i class="fa fa-api-representation"> </i> representations of the same concept, of the same resource.

> The same <i class="fa fa-api-resource"> </i> resource can accept or provide multiple <i class="fa fa-api-representation"> </i> representations.  
*The same <i class="fa fa-api-resource"> </i> inbox can accept or provide multiple <i class="fa fa-api-representation"> </i> envelopes.*  
The latter does not identify the former.

---


## Representation n:1 Content-Type

These <i class="fa fa-api-representation"> </i> representations come with meta descriptors, <i class="fa fa-http-header"> </i> headers, to let you know how to interact with them. The <i class="fa fa-http-content-type"> </i> Content-Type header describes the content of the <i class="fa fa-api-representation"> </i> representation, in terms of semantics and syntax. `text/html` for a webpage, `application/pdf` for a PDF document, `audio/mp3` for audio content in MP3 format.

> The content of multiple <i class="fa fa-api-representation"> </i> representations can be described by the same <i class="fa fa-http-content-type"> </i> Content-Type.  
*The content of multiple <i class="fa fa-api-representation"> </i> envelopes can be described by the same <i class="fa fa-http-content-type"> </i> cover.*  
The latter does not identify the former.

---


## Representation n:1 Payload

A <i class="fa fa-api-representation"> </i> representation without its <i class="fa fa-http-content-type"> </i> Content-Type is just a <i class="fa fa-api-payload"> </i> payload. A PDF document without a `application/pdf` <i class="fa fa-http-header"> </i> header, or say without the `.pdf` file extension, is just a binary file. A sheet of paper without indicators that it is an invoice, from the electricity company, etc. is nothing more than a sheet of paper with ink on it. That sheet of paper can be the support or the medium of an invoice sometimes, or a greeting card some other times.

<i class="fa fa-api-representation"> </i> Representations of `application/json` or `application/json; charset=utf-16` types may share the same payload `{}`. Similarly, an integer, or a textual string, or a string representing a number in base 2, or base 10, may all be equaled to `11`.

> Multiple <i class="fa fa-api-representation"> </i> representations can share the same <i class="fa fa-api-payload"> </i> payload.  
*Multiple <i class="fa fa-api-representation"> </i> envelopes can share the same <i class="fa fa-api-payload"> </i> letter.*  
The latter is part of the former.

---


## TL;DR

(<i class="fa fa-api-entity"> </i>)\* ~ <i class="fa fa-api-resource"> </i> = (<i class="fa fa-api-representation"> </i> = <i class="fa fa-http-content-type"> </i> + <i class="fa fa-api-payload"> </i>)\*

---


## Off-topic: Content-Type vs Media-Type

Can anyone shed some light on the differences, if any?

I tend to take `Content-Type` as referring to the HTTP header, and thus it can be `application/json; charset=utf-8`, while `Media-Type` refers to the {type, subtype} tuple alone, without the parameters - `application/json`. That's what you see in a [couple](http://msdn.microsoft.com/en-us/library/system.net.mime.contenttype.mediatype.aspx) of [places](http://restlet.org/learn/javadocs/2.1/gwt/engine/org/restlet/client/engine/header/ContentType.html) as well. But if you take a quick look at [the HTTP grammar](https://github.com/for-GET/core-pegjs/blob/master/src/ietf/draft_ietf_httpbis_p2_semantics.pegjs#L42) though, you can clearly see that's an opinionated definition.
