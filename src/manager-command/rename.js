import path from 'path';
import fs from 'fs/promises';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const rename = async (currentDirectory, oldFileNamePath, newFileNamePath) => {
    const fromFilePath = path.join(currentDirectory, oldFileNamePath);
    const toFilePath = path.join(currentDirectory, newFileNamePath[0]);

    try {
        await fs.rename(fromFilePath, toFilePath);
    } catch (error) {
        throw new OperationFailed();
    }
};
