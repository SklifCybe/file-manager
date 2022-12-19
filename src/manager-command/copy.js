import fs from 'fs';
import path from 'path';

import { OperationFailed } from '../error-classes/operation-failed.js';

const handleError = () => {
    throw new OperationFailed();
};

export const copy = (currentDirectory, oldFileNamePath, newFileNamePath) => {
    const fromFilePath = path.join(currentDirectory, oldFileNamePath);
    const toFilePath = path.join(currentDirectory, newFileNamePath[0]);

    const readableStream = fs.createReadStream(fromFilePath);
    const writableStream = fs.createWriteStream(toFilePath);

    readableStream.pipe(writableStream);

    readableStream.on('error', handleError);
    writableStream.on('error', handleError);
};
