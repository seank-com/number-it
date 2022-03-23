// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('"number-it" is now active!');

	let disposable = vscode.commands.registerTextEditorCommand('number-it.insertNumbers', (textEditor, edit) => {
		let positions = [];

  	textEditor.selections.forEach(selection => {
			positions.push(selection.anchor);
		});

		let padding = 
			positions.length <    10 ? 1 :
			positions.length <   100 ? 2 :
			positions.length <  1000 ? 3 :
			positions.length < 10000 ? 4 : 5;

		let i = 1;
		positions
			.sort((a,b) => a.isBefore(b) ? -1 : b.isBefore(a) ?  1 : 0)
			.forEach(position => {
				edit.insert(position, i.toString().padStart(padding,"0"));				
				i += 1;
			});
	});
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
