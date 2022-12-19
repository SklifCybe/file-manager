import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import { OperationFailed } from '../error-classes/operation-failed.js';

const handleError = () => {
    throw new OperationFailed();
};

export const decompress = (currentDirectory, commandArguments, restArguments) => {
    const archiveFile = path.join(currentDirectory, commandArguments);
    const destinationFile = path.join(currentDirectory, restArguments[0]);

    const zip = zlib.createGunzip();

    const readableStream = fs.createReadStream(archiveFile);
    const writableStream = fs.createWriteStream(destinationFile);

    readableStream.pipe(zip).pipe(writableStream);

    readableStream.on('error', handleError);
    writableStream.on('error', handleError);
};