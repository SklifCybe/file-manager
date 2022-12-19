import path from 'path';
import crypto from 'crypto';
import fs from 'fs/promises';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const hash = async (currentDirectory, filePath) => {
    const fullFilePath = path.join(currentDirectory, filePath);
   
    try {
        const fileText = await fs.readFile(fullFilePath);

        const hash = crypto.createHash('sha256').update(fileText).digest('hex');

        console.log(hash);
    } catch(error) {
        throw new OperationFailed();
    }
};
