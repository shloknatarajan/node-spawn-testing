# Notes
spawn command can only run a whole script, not a function from a script. Looks like this
const runner = spawn('node', ['spawn.js'], {
        env: {
            ...process.env,
            IS_CHILD_PROCESS: 1 // Set environment variable to indicate child process
        }
    })