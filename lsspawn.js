const { spawn } = require('child_process'); 
  
const lsProcess = spawn('ls'); 
lsProcess.stdout.on('data', data => { 
    console.log(`stdout:\n${data}`); 
}) 
lsProcess.stderr.on("data", (data) => { 
    console.log(`stdout: ${data}`); 
}); 
lsProcess.on('exit', code => { 
    console.log(`Process ended with ${code}`); 
})