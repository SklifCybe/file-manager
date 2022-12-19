import fs from 'fs';
import path from 'path';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const concatenate = (currentDirectory, commandArguments) => {
    const filePath = path.join(currentDirectory, commandArguments);
    const readableStream = fs.createReadStream(filePath);

    readableStream.on('data', (chunk) => {
        console.log(chunk.toString('utf-8'));
    });

    readableStream.on('error', () => {
        throw new OperationFailed();
    });
};
