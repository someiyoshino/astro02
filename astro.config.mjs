import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro02.netlify.app/",
  integrations: [preact()],
  // markdown: {
  //   shikiConfig: {
  //     // Shikiの組み込みテーマから選択（または独自のテーマを追加）
  //     // https://github.com/shikijs/shiki/blob/main/docs/themes.md
  //     theme: 'dracula',
  //     // カスタム言語の追加
  //     // 注：Shikiには.astroを含む無数の言語が内蔵されています。
  //     // https://github.com/shikijs/shiki/blob/main/docs/languages.md
  //     langs: [],
  //     // 水平スクロールを防ぐために文字の折り返しを有効にする
  //     wrap: true,
  //   },
  // },
});