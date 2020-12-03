---
layout: default
permalink: /blog/
title: Blog
last_modified_at: 2020-11-29
---

<h1>
    <a href="{% link _pages/index.md %}">Home</a>
    >
    Blog
</h1>

<ul class="post-list">
    {%- for post in site.posts -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <!-- Post title -->
        <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
            </a>
        </h3>
        <!-- Tags -->
        <div>
            {%- assign last_tag_name = post.tags | last -%}
            {%- for tag_name in post.tags -%}
            <a href="/tags/{{ tag_name }}"><code class="highligher-rouge">{{ tag_name }}</code></a>
            {%-  if tag_name != last_tag_name -%}&nbsp;{%- endif -%}
            {%- endfor -%}
        </div>
        <!-- Post meta -->
        <p class="post-meta">
            <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                {{ post.date | date: date_format }}
            </time>
            •
            <span class="has-tooltip">
                <span>~{{ post.content | number_of_words | divided_by: 265.0 | ceil }} min</span>
                <span class="tooltip-text-right tooltip-text-medium">{{ post.content | number_of_words }} words at 265 WPM</span>
            </span>
        </p>
        <!-- Post description -->
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

<p>
    All tags:&nbsp;
    {%- assign last_tag = unique_sorted_tags | last -%}
    {%- for tag in unique_sorted_tags -%}
    <a href="/tags/{{ tag }}"><code class="highligher-rouge">{{ tag }}</code></a>
    {%-  if tag != last_tag -%}&nbsp;{%- endif -%}
    {%- endfor -%}
</p>
