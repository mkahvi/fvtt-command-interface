const CFG = {
	module: 'command-interface',
	KEYBINDINGS: {
		open: 'open',
	},
};

class CommandInterface {
	/** @type {Element} */
	element;
	/** @type {CommandInterface} */
	static instance;

	constructor() {
		const dom = document.createElement('div');
		dom.id = 'command-interface';
		dom.textContent = 'EEEEEEE';
		dom.classList.add('active');
		document.body.append(dom);

		this.element = dom;

		CommandInterface.instance = this;
	}

	static open() {
		ui.notifications.info('TAKE – CONTROL!');
		CommandInterface.instance ??= new CommandInterface();
		return CommandInterface.instance;
	}

	close() {
		this.element.classList.remove('active');
	}
}

Hooks.once('init', function registerKeybindings() {
	game.keybindings.register(CFG.module, CFG.KEYBINDINGS.open, {
		name: 'CommandInterface.Controls.Open.Label',
		editable: [
			{
				key: 'KeyP',
				modifiers: ['Control', 'Shift'],
			},
		],
		onDown: () => CommandInterface.open(),
		onUp: () => {},
		// precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
	});
});
