export class ControlCommandError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ControlCommandError';
    }
}
