import path from 'path';
import fs from 'fs/promises';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const changeDirectory = async (currentDirectory, commandArguments) => {
    try {
        if (path.isAbsolute(commandArguments)) {
            await fs.access(commandArguments);

            return commandArguments;
        } else {
            const newFilePath = path.join(currentDirectory, commandArguments);

            await fs.access(newFilePath);

            return newFilePath;
        }
    } catch (error) {
        throw new OperationFailed();
    }
};
