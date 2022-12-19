import path from 'path';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const up = (homeDirectory, currentDirectory) => {
    const upperDirectory = path.dirname(currentDirectory);

    if (!upperDirectory.includes(homeDirectory)) {
        throw new OperationFailed();
    }

    return upperDirectory;
};
