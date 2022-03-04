---
title: All Factions
layout: page
---
<p>Here is the list of all factions it is:</p>

{%for page in site.pages %}{%if page.categories contains "faction"%}
{%if page.thumb%}<a href="{{page.url |relative_url}}"><img src="{{page.dpath |append:page.thumb | relative_url}}" class="thumb"></a>{%endif%}
## [{{page.title}}]({{page.url|relative_url}})
{%if page.alink%}<a href="{{page.alink}}">By {{page.author |default: page.alink}}</a>
{%- else if page.author %}<em>By {{page.author}}</em>
{%- endif %}

{{page.short}}
<div style="clear:both"></div>
{%endif%}{%endfor%}
