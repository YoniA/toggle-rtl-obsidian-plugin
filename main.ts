import { Plugin } from 'obsidian';


export default class ToggleRTLPlugin extends Plugin {

  onload() {
		console.log('Toggle RTL plugin loaded.');

		// toggle by command action
    this.addCommand({
      id: "toggle-right-to-left",
      name: "Toggle",
      callback: () => this.toggleRTL()
    });

		// toggle by ribbon action
		this.addRibbonIcon("arrow-right-left", "Toggle RTL mode", () => this.toggleRTL());
	}

  toggleRTL() {
    // @ts-expect-error
    this.app.vault.setConfig('rightToLeft', !this.app.vault.getConfig('rightToLeft'));
  }
}
