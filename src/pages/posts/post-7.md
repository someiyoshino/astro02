---
layout: ../../layouts/MarkdownPostLayout.astro
title: コードハイライト
author: Matsuda
description: "コードハイライトの方法"
pubDate: 2024-07-17
tags: ["astro", "list"]
---

## コードハイライトは標準装備

```javascript
const allPosts = await Astro.glob('../pages/posts/*.md');
const allPosts = await Astro.glob('../pages/posts/*.md');
const allPosts = await Astro.glob('../pages/posts/*.md');
```

```html
<p>Hello</p>
```

markdownでコードブロックの「```」の後に小文字で言語名を記述する必要あり

\```javascriptとか、\```htmlとか


https://www.google.co.jp/

<style>
    pre {
        padding: 1rem;
    }
</style>