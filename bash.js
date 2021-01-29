const pwdFile = require('./pwd');

process.stdout.write('prompt > ')

process.stdin.on('data', pwdFile.pwdFunc);

