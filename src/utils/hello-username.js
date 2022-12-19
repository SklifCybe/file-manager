export const helloUsername = () => {
    try {
        const usernameFlag = '--username';
        const username = process.argv.find((argument) => argument.startsWith(usernameFlag));
    
        if (!username) {
            throw new Error('Username not found!');
        }
        
        console.log(`Welcome to the File Manager, ${username}!`);

        return username.split('=')[1];
    } catch(error) {
        console.error(error.message);
        process.exit(1);
    }
};
