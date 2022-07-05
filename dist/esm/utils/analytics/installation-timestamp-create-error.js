export class InstallationTimestampCreateError extends Error {
    constructor(err) {
        super(`Installation timestamp could not be created. \n${err.message}`);
    }
}
