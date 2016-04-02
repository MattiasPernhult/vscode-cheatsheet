'use strict';
import * as vscode from 'vscode';
import * as quickPick from './openQuickPick';

export function activate(context: vscode.ExtensionContext) {
   
    let disposable = vscode.commands.registerCommand('extension.cheatsheet', () => {
        quickPick.openLanguageAndFramework();
    });

    context.subscriptions.push(disposable);
}