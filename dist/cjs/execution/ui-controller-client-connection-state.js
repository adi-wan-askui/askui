"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiControllerClientConnectionState = void 0;
var UiControllerClientConnectionState;
(function (UiControllerClientConnectionState) {
    UiControllerClientConnectionState[UiControllerClientConnectionState["NOT_CONNECTED"] = 0] = "NOT_CONNECTED";
    UiControllerClientConnectionState[UiControllerClientConnectionState["CONNECTING"] = 1] = "CONNECTING";
    UiControllerClientConnectionState[UiControllerClientConnectionState["CONNECTED"] = 2] = "CONNECTED";
    UiControllerClientConnectionState[UiControllerClientConnectionState["ERROR"] = 3] = "ERROR";
})(UiControllerClientConnectionState = exports.UiControllerClientConnectionState || (exports.UiControllerClientConnectionState = {}));
