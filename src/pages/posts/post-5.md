---
layout: ../../layouts/MarkdownPostLayout.astro
title: fontの追加方法
author: Matsuda
description: "Astroで追加のフォントを扱う方法の説明"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "惑星と星のイラストの中にastroという単語があります。"
pubDate: 2024-07-15
tags: ["astro", "font"]
---

# Fontの追加

Astro公式のDocumentで、Fontsourceの説明があります。

[Fontsource](https://fontsource.org/ "Fontsourceのサイト")

markdown でリンクを別タブで開く記法は無い。

## 大まかな手順

1. Font選定
1. npmでinstall
1. Import
1. font-family設定

## Font選定

まず、Fontsourceで使用したいフォントの名称を確認する

Versionが2つありますね。`Variable`と`Static`です。

ちょっとよくわからないので容量が少なそうな`static`を選択します。

フォントサイズは400が標準のようなのでこれを選択します。

## npmでフォントをinstallする

```
npm install @fontsource/noto-sans-jp
```

package.jsonが更新されますね。

## Import

```
import "@fontsource/noto-sans-jp";
```

### CSS

```
font-family: 'Noto Sans JP', sans-serif;
```

## メモ

フォントを設定すると画面が一瞬チラつきますね。

`npm run dev` で実行している場合、フォントの反映が若干遅れるようですね。

`npm run build` して、`npm run preview` で実行した場合はチラつきませんでした。

～おわり～