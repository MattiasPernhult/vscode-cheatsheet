'use strict';

import * as vscode from 'vscode';

import * as constants from './constants';
import * as helper from './helper';
import * as category from './category';

import * as childProcess from 'child_process';

var exec = childProcess.exec;
var spawn = childProcess.spawn;

var json;
var which;
var urls = {};

export function openLanguageAndFramework() {
    let choice = [constants.JAVASCRIPT, constants.NODE, constants.EXPRESS];
    vscode.window.showQuickPick(choice, {}).then(getCategory); 
}

function openUrl(userChoice: string) {
    if (userChoice) {
        var url = urls[userChoice];
        var opener;
        switch (process.platform) {
            case 'darwin':
                opener = 'open';
                break;
            case 'win32':
                opener = 'start ""';
                break;
            default:
                spawn('open', [url]);
                return;
        }
        exec(opener + ' "' + url + '"');
    }
}

function openLinks(items: string[]) {
    vscode.window.showQuickPick(items, {}).then(openUrl);
}

function getLinks(userChoice: string) {
    if (userChoice) {
        userChoice = category.getKey(userChoice, which);
        let links = json[userChoice];
        let choices = links.map(function(link) {
            urls[link.text] = link.href;
            return link.text; 
        });
        openLinks(choices);
    }
}

function openCategory(items: string[]) {
    vscode.window.showQuickPick(items, {}).then(getLinks);
}

function getCategory(userChoice: string) {
    if (userChoice) {
        which = userChoice;
        json = helper.getJson(userChoice);
        let keys = Object.keys(json);
        let choices = keys.map(function(key) {
           return category.getName(key, userChoice); 
        });
        openCategory(choices);
    }
}