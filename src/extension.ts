// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Formatter from './formatter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "matlab-align" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let formatter = new Formatter();
	let disposable = vscode.commands.registerTextEditorCommand('matlab-align.align', (editor) => {
		// The code you place here will be executed every time your command is executed
		vscode.commands.executeCommand('editor.action.trimTrailingWhitespace');
		formatter.process(editor);
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from MATLAB!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
