---
layout: page
permalink: /blog
title: Blog
---

{%- if site.posts.size > 0 -%}

<h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2>
<ul class="post-list">
{%- for post in site.posts -%}
<li>
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<span class="post-meta">{{ post.date | date: date_format }}</span>
<h3>
<a class="post-link" href="{{ post.url | relative_url }}">
{{ post.title | escape }}
</a>
</h3>
{%- if site.show_excerpts -%}
{{ post.excerpt }}
{%- endif -%}
</li>
{%- endfor -%}
</ul>

{%- assign tags = "" | split: "|" -%}
{%- for post in site.posts -%}
{%-   assign tags = tags | concat: post.tags -%}
{%- endfor -%}
{%- assign sorted_tags = tags | sort -%}
{%- assign unique_sorted_tags = "" | split: "|" -%}
{%- for tag in sorted_tags -%}
{%-   if unique_sorted_tags contains tag -%}
{%-     continue -%}
{%-   endif -%}
{%-   assign unique_sorted_tags = tag | split: "|" | concat: unique_sorted_tags -%}
{%- endfor -%}

<div>
{%- assign last_tag = unique_sorted_tags | last -%}
{%- for tag in unique_sorted_tags -%}
<a href="/tags/{{ tag }}"><code class="highligher-rouge">{{ tag }}</code></a>
{%- if tag != last_tag -%}&nbsp;{%- endif -%}
{%- endfor -%}
</div>

{%- endif -%}
