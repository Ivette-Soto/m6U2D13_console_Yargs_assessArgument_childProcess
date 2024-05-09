//  In Linux  bin bash   #!/usr/bin/env node  
// the servers to deploy  projects in the near future are going to be Linux

const yargs = require('yargs');
const child = require('child_process');

const user = "ovni22"
const pass = 123457

const args = yargs.command(

    //arguments 
    'access' ,
    'Command to enter Area 51',
    {
        user: {
            describe: 'Username',
            demand: true,
            alias: 'u'
        },

        pass: {
            describe: 'Password',
            demand: true,
            alias: 'p'
        }
    },

    // callback
        (args) => {
            if(args.user == user && args.pass == pass){
                child.exec("node access.js", (err, stdout)=>{
                    if(err){console.log(err)}
                    console.log(stdout)
                })
            }
            else {
                console.log("The credentials are incorrect.")
            }

        }
)

// this allows to show info in console
.help().argv