const { spawn } = require('child_process')
let logData = ""
// Check if already running as a child process
function runChildProcess(callback) {
    if (!process.env.IS_CHILD_PROCESS) {
        // spawn(command[, args][, options])
        const func1Runner = spawn('node', ['func1runner.js'], {
            env: {
                ...process.env,
                IS_CHILD_PROCESS: 1 // Set environment variable to indicate child process
            }
        })
        func1Runner.stdout.on('data', data => {
            const output = data.toString(); // Convert output from bytes to string
            logData += output
        })
        func1Runner.stderr.on("data", (data) => { 
            console.log(`stdout: ${data}`); 
        }); 
        func1Runner.on('exit', code => { 
            console.log(`Process ended with ${code}`);
            callback(logData)
        })
    }
}

runChildProcess(logData => {
    console.log(logData)
})
