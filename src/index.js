import os from 'os';
import fs from 'fs';
import path from 'path';

import { exitProcess } from './utils/exit-process.js';
import { InvalidInput } from './error-classes/invalid-input.js';
import { Command } from './constants/command.js';
import { list } from './manager-command/list.js';
import { up } from './manager-command/up.js';
import { changeDirectory } from './manager-command/change-directory.js';
import { operationSystem } from './manager-command/operation-system.js';
import { concatenate } from './manager-command/concatenate.js';
import { helloUsername } from './utils/hello-username.js';
import { printCurrentDirectory } from './utils/print-current-directory.js';
import { addition } from './manager-command/addition.js';
import { rename } from './manager-command/rename.js';
import { copy } from './manager-command/copy.js';
import { remove } from './manager-command/remove.js';
import { move } from './manager-command/move.js';
import { hash } from './manager-command/hash.js';
import { compress } from './manager-command/compress.js';
import { decompress } from './manager-command/decompress.js';

const homeDirectory = os.homedir();
let currentDirectory = homeDirectory;

const username = helloUsername();

process.stdin.on('data', async (buffer) => {
    const fullUserCommand = buffer.toString('utf-8').replace('\n', '');
    const [command, commandArguments, ...spreadArguments] = fullUserCommand.split(' ');

    try {
        switch (command) {
            case Command.Up: {
                currentDirectory = up(homeDirectory, currentDirectory);
                break;
            }
            case Command.Cd: {
                currentDirectory = await changeDirectory(currentDirectory, commandArguments);
                break;
            }
            case Command.Ls: {
                await list(currentDirectory);
                break;
            }
            case Command.Cat: {
                concatenate(currentDirectory, commandArguments);
                break;
            }
            case Command.Add: {
                await addition(currentDirectory, commandArguments);
                break;
            }
            case Command.Rn: {
                await rename(currentDirectory, commandArguments, spreadArguments);
                break;
            }
            case Command.Cp: {
                copy(currentDirectory, commandArguments, spreadArguments);
                break;
            }
            case Command.Mv: {
                await move(currentDirectory, commandArguments, spreadArguments);
                break;
            }
            case Command.Rm: {
                await remove(currentDirectory, commandArguments);
                break;
            }
            case Command.Os: {
                operationSystem(commandArguments);
                break;
            }
            case Command.Hash: {
                await hash(currentDirectory, commandArguments);
                break;
            }
            case Command.Compress: {
                compress(currentDirectory, commandArguments, spreadArguments);
                break;
            }
            case Command.Decompress: {
                decompress(currentDirectory, commandArguments, spreadArguments);
                break;
            }
            case Command.Exit: {
                return exitProcess(username);
            }
            default: {
                throw new InvalidInput();
            }
        }

        printCurrentDirectory(currentDirectory);
    } catch (error) {
        console.error(error.message);
        printCurrentDirectory(currentDirectory);
    }
});

process.on('SIGINT', exitProcess.bind({}, username));
process.on('uncaughtException', (error) => {
    console.error(error.message);
});
