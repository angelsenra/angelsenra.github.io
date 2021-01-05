---
layout: default
permalink: /projects/game-of-life/
short_name: Game of Life
title: "Conway's Game of Life: the most famous cellular automaton"
description: >-
  Building a Game of Life using a canvas and javascript code. It's my first project using canvas and it's mostly an excuse to learn it
last_modified_at: 2020-12-29
uses_bootstrap: true
---

# [Home]({% link _pages/index.md %}) > [Projects]({% link _pages/projects.md %}) > Game&nbsp;of&nbsp;Life

<div class="h-centered-text">
  <canvas id="game-canvas" width="600" height="400"></canvas>
</div>

<div class="h-centered-text">
  <p>
    Updating <span id="game-speed">??</span> times per second -
    <span id="step-count">??</span> steps since last reset
  </p>

  <div class="btn-group">
    <button class="btn btn-primary" id="btn-pause">Pause</button>
    <button class="btn btn-primary" id="btn-next">Next Step</button>
    <button class="btn btn-primary" id="btn-speed-up">Speed Up</button>
    <button class="btn btn-primary" id="btn-slow-down">Slow Down</button>
    <button class="btn btn-primary" id="btn-reset">Reset</button>
    <button class="btn btn-primary" id="btn-clear">Clear</button>
  </div>
</div>

<br>

```
Pause       - space / p
Next Step   - right arrow / d / n
Speed Up    - up arrow / w
Slow Down   - down arrow / s
Reset       - r
Clear       - c
```

<script src="{% link assets/game-of-life.js %}"></script>
