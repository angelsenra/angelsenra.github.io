---
layout: default
permalink: /jobs/cv/
title: Curriculum Vitae
last_modified_at: 2020-11-29
---

<h1 class="hide-on-print">
<a href="{% link _pages/index.md %}">Home</a>
>
<a href="{% link _pages/jobs.md %}">Jobs</a>
>
Curriculum Vitae
</h1>

<p class="hide-on-print">
    <a href="javascript:print()">Print this page</a>
    /
    <span class="has-tooltip">
        <a href="javascript:generatePDF('cv-content', 'cv-angelsenra.pdf')">Generate PDF<noscript> (requires javascript)</noscript></a>
        <span class="tooltip-text-right tooltip-text-medium">⚠️<br>Prefer printing when possible</span>
    </span>
</p>
<hr class="hide-on-print">

<div id="cv-content" markdown="1">
    {%- include cv-content.md -%}
</div>

<script defer src="/assets/dist/jspdf-2.1.1.umd.min.js"></script>
<script defer src="/assets/dist/html2canvas-1.0.0-rc.7.min.js"></script>
<script defer src="/assets/html2pdf.js"></script>
