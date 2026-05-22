---
title: 'ケイリッシュ ヘルプセンター'
description: 'AI経理ケイリッシュの使い方ガイド'
template: splash
hero:
  tagline: 領収書をスキャンするだけ。AIが仕訳まで自動で。
  actions:
    - text: はじめ方ガイド
      link: /getting-started/
      icon: right-arrow
      variant: primary
    - text: よくある質問
      link: /faq/
      icon: right-arrow
---

import { CardGrid, Card } from '@astrojs/starlight/components';

## ガイド一覧

<CardGrid>
  <Card title="はじめ方" icon="open-book">
    サインアップから初回スキャンまで5分で案内
    [読む →](/getting-started/)
  </Card>
  <Card title="電帳法について" icon="star">
    保存要件・ファイル名規則・索引CSV
    [読む →](/denchoho/)
  </Card>
  <Card title="料金プラン" icon="star">
    Free / Advice の違いと先着100名特典
    [読む →](/pricing/)
  </Card>
  <Card title="よくある質問" icon="star">
    サービス・電帳法・課金に関するFAQ
    [読む →](/faq/)
  </Card>
  <Card title="お問い合わせ" icon="star">
    フォーム・メール・SNSでのご連絡
    [読む →](/contact/)
  </Card>
</CardGrid>

## ケイリッシュとは

**3クリック経理** — 画像をアップロードするだけで、AIが日付・金額・取引先・勘定科目を自動抽出。確認してCSVダウンロードするだけのシンプルな経理ツールです。

- **サーバー非保持**: 領収書データは24時間後に自動削除
- **電帳法対応**: SHA-256・索引CSV・ファイル名規則を標準搭載
- **Honest AI**: 不確実な箇所は必ずユーザーに確認。サイレントな誤判定を許さない設計
