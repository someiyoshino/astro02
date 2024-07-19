---
layout: ../../layouts/MarkdownPostLayout.astro
title: 画像の表示方法
author: Matsuda
description: "Astroで画像を扱う方法の説明"
pubDate: 2024-07-16
tags: ["astro", "image","photo"]
---

## 画像の保存場所

まずは、`src/` ディレクトリがベター

`src`配下はAstroの制御化なので、最適化されてバンドルされるので。

次に、`public`ディレクトリに画像を置いてもOK。そのまま使用される。


<!-- ![image](/src/images/font1.png) -->

<img src="/src/images/font1.png" alt="フォント" width="100%">

## NG1

この使用例は恐らくpublicへのリンクなのかな？

<img src="../../images/font1.png" alt="Image description">

