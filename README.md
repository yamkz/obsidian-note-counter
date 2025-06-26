# Obsidian Note Counter プラグイン

このObsidianプラグインは、あなたのVault内のMarkdownノートの総数をステータスバーに表示します。

## 機能

*   **リアルタイムのノート数表示**: Obsidian Vault内のMarkdownノートの現在の数を表示します。
*   **動的な更新**: ノートが作成、削除、または名前変更されたときに、ノート数を自動的に更新します。
*   **ステータスバーへの統合**: Obsidianのステータスバーに便利にノート数を表示します。

## インストール

### 手動インストール

1.  **最新リリースをダウンロード**:
    (プラグインがGitHubに公開されたら、ここにリリースページへのリンクが提供されます。)
    現時点では、あなたのローカルのObsidian Vaultのプラグインディレクトリにファイルがあります。

2.  **プラグインファイルをVaultに配置**:
    `main.js`、`manifest.json`、`styles.css` (もしあれば) のファイルが、あなたのVaultの`.obsidian/plugins/`ディレクトリ内の`obsidian-note-counter`フォルダに直接配置されていることを確認してください。

    例:
    `<あなたのVault>/.obsidian/plugins/obsidian-note-counter/`

3.  **Obsidianでプラグインを有効にする**:
    *   Obsidianを開きます。
    *   **設定** (左下の歯車アイコン) を開きます。
    *   **コミュニティプラグイン** に移動します。
    *   **セーフモード** をオフにします。
    *   「インストール済みプラグイン」の下にある「Obsidian Note Counter」を見つけて、トグルをオンにします。

## 使用方法

有効にすると、Obsidianウィンドウの下部にあるステータスバーに、`Notes: 123` のようにノートの総数が表示されます。

## 開発

このプラグインはTypeScriptとEsbuildを使用して開発されました。

### セットアップ

1.  このリポジトリをクローンするか、プラグインディレクトリに移動します:
    ```bash
    cd <あなたのプラグインディレクトリ>
    ```
    (例: `cd あなたのVault/.obsidian/plugins/obsidian-note-counter`)
2.  依存関係をインストールします:
    ```bash
    npm install
    ```
3.  プラグインをビルドします:
    ```bash
    npm run build
    ```
    ライブリロードでの開発の場合:
    ```bash
    npm run dev
    ```

## 貢献

提案や改善点があれば、お気軽にIssueを開いたり、プルリクエストを送信してください。

## ライセンス

MIT License.