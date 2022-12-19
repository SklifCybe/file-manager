import fs from 'fs';
import path from 'path';

import { copy } from './copy.js';
import { remove } from './remove.js';

export const move = async (currentDirectory, oldFileNamePath, newFileNamePath) => {
    const oldFilePath = path.join(currentDirectory, oldFileNamePath);

    const existOldFile = fs.existsSync(oldFilePath);

    copy(currentDirectory, oldFileNamePath, newFileNamePath);

    if (existOldFile) {
        process.nextTick(() => {
            remove(currentDirectory, oldFileNamePath);
        });
    }
};
