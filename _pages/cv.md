---
layout: page
permalink: /cv
title: Curriculum Vitae
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.2.2/purify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/polyfills.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"></script>
<script>
    const a4Ratio = 842 / 595
    const { jsPDF } = window.jspdf;
    generate = function (elementId) {
        const element = document.getElementById(elementId)
        const width = element.offsetWidth + 40
        var pdf = new jsPDF('p', 'px', [width, a4Ratio * width]);
        pdf.html(element, {
            callback: function (pdf) {
                var iframe = document.createElement('iframe');
                iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:400px');
                document.body.appendChild(iframe);
                iframe.src = pdf.output('datauristring');
            },
            filename: "cv-angelsenra.pdf",
            x: 20,
            y: 20
        });
    };
</script>
<button onclick="javascript:generate('cv-content');">Generate PDF</button>

<div id="cv-content" markdown="1">
    {%- include cv-content.md -%}
</div>

