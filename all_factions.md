---
title: All Factions
layout: page
---
Here is the list of all factions it is:

{%for page in site.pages %}{%if page.categories contains "faction"%}
{%if page.thumb%}<img src="{{page.dpath |append:page.thumb | relative_url}}" class="thumb">{%endif%}
[{{page.title}}]({{page.url}})
{%endif%}{%endfor%}
