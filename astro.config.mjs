// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://help.keirish.app',
  integrations: [
    sitemap(),
    starlight({
      title: 'ケイリッシュ ヘルプ',
      description: 'AI経理ケイリッシュの使い方ガイド',
      defaultLocale: 'root',
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      social: [
        { icon: 'x.com', label: 'X', href: 'https://x.com/keirish_app' },
      ],
      sidebar: [
        {
          label: 'ガイド',
          items: [
            { label: 'はじめに', slug: 'getting-started' },
            { label: '電帳法について', slug: 'denchoho' },
            { label: '料金プラン', slug: 'pricing' },
            { label: 'よくある質問', slug: 'faq' },
            { label: 'お問い合わせ', slug: 'contact' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
