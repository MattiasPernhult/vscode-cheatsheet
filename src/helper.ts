'use strict';

import * as constants from './constants';

var EXPRESS = require('../../data/express.json');
var JAVASCRIPT = require('../../data/javascript.json');
var NODE = require('../../data/node.json');

export function getJson(choice: string) {
    switch (choice) {
        case constants.JAVASCRIPT:
            return JAVASCRIPT;
        case constants.NODE:
            return NODE;
        case constants.EXPRESS:
            return EXPRESS;
        default:
            return null;
    }
}
