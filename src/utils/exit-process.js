export const exitProcess = (username) => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);

    return process.exit(0);
};
