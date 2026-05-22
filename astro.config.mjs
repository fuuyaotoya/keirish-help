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
          label: 'はじめに',
          items: [
            { label: 'ケイリッシュとは', slug: 'about' },
            { label: 'はじめ方', slug: 'getting-started' },
          ],
        },
        {
          label: 'スキャンガイド',
          items: [
            { label: '領収書をスキャンする', slug: 'scan-upload' },
            { label: 'スキャン前の確認', slug: 'scan-prescan' },
            { label: 'AI解析結果の見方', slug: 'scan-results' },
            { label: '結果を編集する', slug: 'scan-edit' },
            { label: '外貨の領収書', slug: 'scan-fx' },
            { label: 'CSVエクスポート', slug: 'scan-export' },
          ],
        },
        {
          label: 'その他',
          items: [
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
