import { ReadRecordingEndResponse, ReadRecordingPartResponse } from '../core/runner-protocol';
export declare class ReadRecordingResponseStreamHandler {
    private resolve;
    private reject;
    videoChunks: string[];
    constructor(resolve: (value: ReadRecordingPartResponse | PromiseLike<ReadRecordingPartResponse>) => void, reject: (reason?: unknown) => void);
    onMessage(data: ReadRecordingPartResponse | ReadRecordingEndResponse): void;
    onError(err: unknown): void;
}
