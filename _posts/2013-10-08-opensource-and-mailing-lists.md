---
layout: strap-jekyll-default-post
title: Opensource and mailing lists
categories: improve
tags: specification feedback
published: true
---

The title of this post may not seem related to REST, not even HTTP, but it is so very much related to both and more.


## Context

<blockquote class="twitter-tweet"><p><a href="https://twitter.com/alexkli">@alexkli</a> <a href="https://twitter.com/stilkov">@stilkov</a> <a href="https://twitter.com/jasnell">@jasnell</a> HTTP/2.0 is defined in an open-to-all IETF Working Group, not on Twitter or in blog posts :-). Join the WG.</p>&mdash; Julian Reschke (@jreschke) <a href="https://twitter.com/jreschke/statuses/355270697402114049">July 11, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p>one of my most common email replies: &quot;thanks, but please email this to the <a href="https://twitter.com/search?q=%23libcurl&amp;src=hash">#libcurl</a> mailing list instead of me privately&quot; ...</p>&mdash; Daniel Stenberg (@bagder) <a href="https://twitter.com/bagder/statuses/383703368709193729">September 27, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I think the two tweets above are the best starting point for some thought-tinkering. Alex Klimetschek ‏replied to Julian, I replied to Daniel, and we took it back and forth a couple of times, but I know there's room for clarification and for some highlighting of the/a core issue, so here we are.

For starters, if you don't know who the authors are, then take 5 and look them up.

Both tweets paint the picture that **there's a mailing list, or the highway**. And while it may be so, in practice, I challenge that it has to be like that. Mailing lists have their advantages, no doubt. Communication is distributed. All participants to the discussion have a copy of the communication. It's not proprietary. Easy to create a public archive. Anyone can join. No learning curve, after all it's just email. There are probably more advantages, and I'm not challenging those.


## All or nothing

I'm challenging the advocacy that the world began and will end with mailing lists. It smells similar to the introduction of digital books, VoIP, vegetarianism, etc. "No, I need to feel a book. I need to turn those pages." or "No, how can you live without sausages, steak? You need those nutrients." Bull!

Let's talk about THE disadvantage of a mailing list. There may be more, but it's only one that drives me away from mailing lists. I am not talking without a humble limited experience. It's the binary stream. The stream is either overflowing, either dry. Take a shot at joining [the HTTPBIS working group mailing list](ietf-http-wg@w3.org) or just look at [the public archive](http://lists.w3.org/Archives/Public/ietf-http-wg).

[In Oct'2013 there have been 78 messages until today, in 8 days - around 10 messages per day](http://lists.w3.org/Archives/Public/ietf-http-wg/2013OctDec/). Don't judge the quantity yet, because there's nothing to judge without the component of quality/interest. Say that you found something regarding `CONNECT` and would like to discuss it and then follow up that discussion. There are only 5 messages out of those 78 on that thread. Unless it's your job or your main interest to be part of the all HTTPBIS topics, you would have had 73 messages in your inbox that would closely resemble spam, judging by your intention at least. Your intention was to join the list for the `CONNECT` topic; your intention was not to solicit a copy of all the other threads. That might have been your intention, but the "contract" of a mailing list is binary. All or nothing. So it's not spam.


## Lack of engagement

Playing the devil's advocate, of course it's easy to come up with "this is how it's supposed to be" arguments. If you don't have the whole picture, then how do you expect to have good technical arguments? If you don't want the rest of the threads, you can just filter them out in your email client. And again, I'm sure there's more that you can come up with that. But, if it is not your job or your primary interest to follow the whole of HTTPBIS,

- either you end up there (making it your "job") because you won't spend time filtering out stuff and you'll read everything
- either you end up there (making it your "job") just that it will be a different job - creating filters
- or you'll get tired of everything, and you will unsubscribe

"Perfect!" may say the devil, "We don't need hipster kids!"

For any mature mind, I don't need to explain that's a dead end. A handful of people end up "deciding". No matter how smart they are, no matter how simple the design may be, the chances that you are out-of-sync with the implementors, the users, the stakeholders of that artifact increase n-fold. Make no mistake, this is not about pleasing the hipsters, the "this is not easy in my language, I'd like it different", the "this is too advanced because I can't understand the gain", etc gang. This is about reaching out to minds that understand the problem domain, may clarify the problem domain, may re-use the proposed solution in another problem domain, may suggest alternative solutions, may implement the solution, etc. **It's about those that actually have a brain and want to use it.**

> We thought that we had the answers, it was the questions we had wrong. *Bono*

I'm not saying I'm one of those brainiacs, but for those moments of ["hmm, I think something doesn't quite fit into the puzzle"](https://github.com/http2/http2-spec/issues/166), my engagement is susitained by the fact that I can just fix that piece of the puzzle. I may fix it in the wrong way because I didn't bother with the whole puzzle, but it may also be that I don't need to actually fix it but just ask the right question, and other brainiacs will fix it.


## Alternatives

> It's not that they can't see the solution. They can't see the problem. *G.K. Chesterton*

[HTTP/2.0](http://tools.ietf.org/html/draft-ietf-httpbis-http2) is one of the few drafts I know with an associated GitHub/other public repository. The funny thing is that the repository is also an issue tracker, although judging by [my issue](https://github.com/http2/http2-spec/issues/166), every GitHub issue should be closed with "Closed by *link to some mailing list thread*".

I don't understand how this works, but it's plain wrong IMHO to keep discussions going in 2 different places, no matter if you try to separate them by some discussion level/category. But I'm digressing.

The thing with GitHub issues, or any issue tracker system for that matter, is that you can watch **just one issue**. Disregarding the outcome of my issue, I was able to get emails/notifications just for that alone. When I got asked to go on the mailing list with my question, I immediately disregarded the request because otherwise I would have gone back to the stream of non-related (to my issue) discussions on that list. The issue is still open IMHO, despite the GitHub status, and I have no idea if it was ever brought up on the mailing list, but as far as my "duty" goes, it's done. A "duty" is not to be silent about a problem related to a common good. A "duty" is not to redirect your time and energy into useless (as in unrelated) talks, or to go to "the end of the world" (ok, it's an exaggeration in this case) for something so obvious: "a path cannot be a path and a query".

If you think that anyone saying no to mailing lists is saying yes to Twitter, blog posts, private emails, etc then please get some basic logic course, because that is not a logically valid sentence. If I tell you "I don't like mailing lists" over the phone, that does not mean I'm advocating the phone as being better than the mailing list.

Daniel obviously did the right thing in not pursuing the issue in private, but wouldn't it have been better (for both parties, I'd reckon) to continue with "I have forwarded your email to the mailing list. Subscribe if you want to follow-up. Thanks"? The person may or may not subscribe, the mailing list thread might quickly end up on a dead road because the others need more insight, more context and the author is not on the mailing list to provide more information, but at least the question surfaced, it will be searchable in the archive, if it came via Twitter then the mailing list thread may have an URI as a reference starting point, etc

GitHub may close tomorrow for all we know, so this is also not a post advocating for using GitHub for all discussions, but when putting GitHub and a mailing list side by side, in my world the interaction pattern that you get on GitHub promotes sustainable communication and engagement. The mailing list pattern doesn't.

<blockquote class="twitter-tweet"><p><a href="https://twitter.com/bagder">@bagder</a> mmm. opensource is not about a group, it’s about individuals fixing/following mostly tiny bits, not an atomic codebase</p>&mdash; Andrei Neculau (@andreineculau) <a href="https://twitter.com/andreineculau/statuses/384235720376078336">September 29, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

> Judge a man by his questions rather than his answers. *Voltaire*

I have no idea if this reaction is shared by others, and I don't hold a mighty solution, but my question is: since when did we become mailing-list religious?

Because that's what this is. You're talking in void, unless it's on a mailing-list. Can you imagine one of the two authors meeting a friend or a colleague in real life, and them going "ahh, can you please post this to the mailing list? I cannot process it otherwise" ? I bet they don't do that, but since that doesn't scale, or since not everyone is equally/more experienced than that friend to have a qualified input on the matter, then mailing lists are one way to keep the noise down. "Subscribe, or get off my lawn". That may sound alright, but it's not - if you want to keep the noise down, then walk the walk: allow as many to join the discussion, and then just don't reply, mute or even close the issue in a split of a second.

<blockquote class="twitter-tweet"><p><a href="https://twitter.com/andreineculau">@andreineculau</a> in my world, open source is about open development so that as many as possible can participate =&gt; keep all discussions open</p>&mdash; Daniel Stenberg (@bagder) <a href="https://twitter.com/bagder/statuses/384237141804740608">September 29, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Participation is as much about transparency as about the ability to pitch in. So instead of pushing everything down on everyone and asking them to filter out what they consider as "noise", you (the author/owner/moderator/admin) filter the real noise and accept as many channels for questions to be raised.

> To glorify democracy and to silence the people is a farce; to discourse on humanism and to negate people is a lie. *Paulo Freire*

NOTE: if you think of leaving a comment thinking this is a rant, or an attack to Julian/Daniel, then just don't expect a reply
