/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", './inoDef', 'vscode'], function (require, exports, languageDef, vscode_1) {
    function activate(subscriptions) {
        subscriptions.push(vscode_1.Modes.registerMonarchDefinition('ino', languageDef.language));
    }
    exports.activate = activate;
});
//# sourceMappingURL=inoMain.js.map
