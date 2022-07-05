"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadRecordingResponseStreamHandler = void 0;
class ReadRecordingResponseStreamHandler {
    constructor(resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
        this.videoChunks = [];
    }
    onMessage(data) {
        if (data.msgName === 'READ_RECORDING_PART_RESPONSE') {
            this.videoChunks.push(data.data.video);
            return;
        }
        if (data.msgName === 'READ_RECORDING_END_RESPONSE') {
            this.resolve({
                msgName: 'READ_RECORDING_PART_RESPONSE',
                data: { video: this.videoChunks.join('') },
            });
            return;
        }
        this.reject(`Wrong message: ${data}`);
    }
    onError(err) { this.reject(err); }
}
exports.ReadRecordingResponseStreamHandler = ReadRecordingResponseStreamHandler;
