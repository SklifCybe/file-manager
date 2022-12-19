import fs from 'fs/promises';
import path from 'path';

import { OperationFailed } from '../error-classes/operation-failed.js';

export const list = async (directory) => {
    try {
        const files = await fs.readdir(directory);
        const table = [];

        for (let i = 0; i < files.length; i++) {
            const fileName = files[i];
            const filePath = path.join(directory, fileName);
            const fileStat = await fs.stat(filePath);
            const type = fileStat.isDirectory() ? 'directory' : 'file';

            table.push({ Name: fileName, Type: type });
        }

        table.sort((left, right) => {
            return left.Name.localeCompare(right.Name) && left.Type.localeCompare(right.Type);
        });

        console.table(table);
    } catch (error) {
        throw new OperationFailed(error);
    }
};
