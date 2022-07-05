import path from 'path';
export function getPathToNodeModulesRoot() {
    return path.join(__dirname, '..', '..');
}
