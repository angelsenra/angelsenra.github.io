---
layout: default
permalink: /projects/game-of-life/
short_name: Game of Life
title: "Conway's Game of Life: the most famous cellular automaton"
description: >-
  Building a game of life using a canvas and javascript code. It's my first project using canvas and it's mostly an excuse to learn it
last_modified_at: 2020-12-20
---

# [Home]({% link _pages/index.md %}) > Game of Life

<div class="h-centered-text">
  <canvas id="game-canvas" width="600" height="400"></canvas>
</div>

<h1 id="paused" class="h-centered-text hidden">-- PAUSED --</h1>

Updating <span id="game-speed">??</span> times per second -
<span id="step-count">??</span> steps since last reset

```
Pause       - space / p
Next step   - right arrow / d / n
Speed Up    - up arrow / w
Slow Down  - down arrow / s
Reset       - r
```

<script src="{% link assets/game-of-life.js %}"></script>
