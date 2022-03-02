---
title: All Factions
layout: page
---
Here is the list of all factions it is:

{%for page in site.pages %}{%if page.categories contains "faction"%}
{%if page.thumb%}<a href="{{page.url|relative_url}}"><img src="{{page.dpath |append:page.thumb | relative_url}}" class="thumb">{%endif%}
[{{page.title}}]({{page.url|relative_url}})</a>
{{page.short}}
{%endif%}{%endfor%}
