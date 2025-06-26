# Obsidian Note Counter Plugin

This is a simple Obsidian plugin that displays the total number of Markdown notes in your vault in the status bar.

## Features

*   **Real-time Note Count**: Shows the current number of Markdown notes in your Obsidian vault.
*   **Dynamic Updates**: Automatically updates the note count when notes are created, deleted, or renamed.
*   **Status Bar Integration**: Displays the count conveniently in Obsidian's status bar.

## Installation

### Manual Installation

1.  **Download the latest release**:
    (Once the plugin is on GitHub, you would provide a link to the releases page here.)
    For now, you can find the plugin files in your local Obsidian vault's plugin directory.

2.  **Place the plugin files in your vault**:
    Ensure the `main.js`, `manifest.json`, and `styles.css` (if any) files are directly inside the `obsidian-note-counter` folder within your vault's `.obsidian/plugins/` directory.

    Example path:
    `<Your-Vault>/.obsidian/plugins/obsidian-note-counter/`

3.  **Enable the plugin in Obsidian**:
    *   Open Obsidian.
    *   Go to **Settings** (gear icon in the bottom left).
    *   Navigate to **Community plugins**.
    *   Turn **Safe mode** off.
    *   Under "Installed plugins", find "Obsidian Note Counter" and toggle it on.

## Usage

Once enabled, the total number of notes will be displayed in the status bar at the bottom of your Obsidian window, like: `Notes: 123`.

## Development

This plugin was developed using TypeScript and Esbuild.

### Setup

1.  Clone this repository (or navigate to your plugin directory):
    ```bash
    cd <your-plugin-directory>
    ```
    (e.g., `cd your-vault/.obsidian/plugins/obsidian-note-counter`)
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the plugin:
    ```bash
    npm run build
    ```
    For development with live reloading:
    ```bash
    npm run dev
    ```

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

MIT License.

---

# Obsidian Note Counter プラグイン (日本語)

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
