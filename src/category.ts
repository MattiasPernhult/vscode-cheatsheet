import * as constants from './constants';

export function getName(key: string, which: string) {
    if (which === constants.JAVASCRIPT) {
        return javascript[key];
    } else if (which === constants.NODE) {
        return node[key];
    } else if (which === constants.EXPRESS) {
        return express[key];
    }
}

export function getKey(value: string, which: string) {
    var object;
    if (which === constants.JAVASCRIPT) {
        object = javascript;
    } else if (which === constants.NODE) {
        object = node;
    } else if (which === constants.EXPRESS) {
        object = express;
    }
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (object[property] === value) {
                return property;
            }
        }
    }
}

let express = {
    application: 'Application',
    request: 'Request',
    response: 'Response',
    router: 'Router',
    middleware: 'Middleware',
};

let javascript = {
    arrayProperties: 'Array Properties',
    arrayMethods: 'Array Methods',
    mathProperties: 'Math Properties',
    mathMethods: 'Math Methods',
    numberProperties: 'Number Properties',
    numberMethods: 'Number Methods',
    stringProperties: 'String Properties',
    stringMethods: 'String Methods',
    globalMethods: 'Global Methods',
    dateProperties: 'Date Properties',
    dateMethods: 'Date Methods',
};

let node = {
    globalObjects: 'Global Objects',
    consol: 'Console',
    timers: 'Timers',
    util: 'Util',
    module: 'Module',
    addons: 'Addons',
    buffer: 'Buffer',
    stream: 'Stream',
    tty: 'TTY',
    process: 'process',
    events: 'Events',
    domain: 'Domain',
    crypto: 'Crypto',
    tsl: 'TSL',
    stringDecoder: 'String Decoder',
    fileSystem: 'File System',
    net: 'Net',
    udp: 'UDP',
    dns: 'DNS',
    path: 'Path',
    queryString: 'Query String',
    punnycode: 'PunnyCode',
    readline: 'Readline',
    http: 'HTTP',
    httpServer: 'HTTP Server Class',
    httpServerRequest: 'HTTP ServerRequest Class',
    httpServerResponse: 'HTTP ServerResponse Class',
    httpAgent: 'HTTP Agent Class',
    httpClientRequest: 'HTTP ClientRequest Class',
    httpClientResponse: 'HTTP ClientResponse Class',
    https: 'HTTPS',
    url: 'URL',
    executingjs: 'Executing JS',
    childProcess: 'Child Process',
    assert: 'Assert',
    zlib: 'Zlib',
    os: 'OS',
    debugger: 'Debugger',
    cluster: 'Cluster',
};
