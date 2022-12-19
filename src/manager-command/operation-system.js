import os from 'os';

import { OperationFailed } from '../error-classes/operation-failed.js';
import { OperationSystemCommand } from '../constants/operation-system-command.js';

export const operationSystem = (command) => {
    switch (command) {
        case OperationSystemCommand.Eol: {
            console.log(JSON.stringify(os.EOL));
            break;
        }
        case OperationSystemCommand.Cpus: {
            console.log(os.cpus());
            break;
        }
        case OperationSystemCommand.Homedir: {
            console.log(os.homedir());
            break;
        }
        case OperationSystemCommand.Username: {
            console.log(os.userInfo().username);
            break;
        }
        case OperationSystemCommand.Architecture: {
            console.log(os.arch());
            break;
        }
        default: {
            throw new OperationFailed();
        }
    }
};
