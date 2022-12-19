import fs from 'fs/promises';
import path from 'path';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const addition = async (currentDirectory, filePath) => {
    const fullFilePath = path.join(currentDirectory, filePath);

    try {
        await fs.open(fullFilePath, 'wx');
    } catch (error) {
        throw new OperationFailed(error);
    }
};
