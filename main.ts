import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class NoteCounterPlugin extends Plugin {
    private noteCountStatusBarItem: HTMLElement;

    async onload() {
        console.log('Loading Note Counter plugin');

        // Add a status bar item and store its reference
        this.noteCountStatusBarItem = this.addStatusBarItem();
        this.updateNoteCount(); // Initial count

        // Register events to update the count dynamically
        this.registerEvent(this.app.vault.on('create', () => this.updateNoteCount()));
        this.registerEvent(this.app.vault.on('delete', () => this.updateNoteCount()));
        this.registerEvent(this.app.vault.on('rename', () => this.updateNoteCount()));
    }

    onunload() {
        console.log('Unloading Note Counter plugin');
        // Obsidian automatically handles removal of registered items on unload
    }

    updateNoteCount() {
        const markdownFiles = this.app.vault.getMarkdownFiles();
        const noteCount = markdownFiles.length;
        this.noteCountStatusBarItem.setText(`Notes: ${noteCount}`);
        console.log(`Total notes: ${noteCount}`);
    }
}
