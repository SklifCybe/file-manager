import path from 'path';
import fs from 'fs/promises';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const remove = async (currentDirectory, removeFile) => {
    const filePath = path.join(currentDirectory, removeFile);

    try {
        await fs.unlink(filePath);
    } catch(error) {
        throw new OperationFailed();
    }
};
