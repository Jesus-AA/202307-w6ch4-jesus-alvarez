import { program } from 'commander';
import 'dotenv/config';
import { createServer } from 'http';
let PORT = process.env.PORT || 3000;
program.option('-v, --version');
program.option('--port <value>');
program.parse();
const options = program.opts();
if (options.version) {
    console.log('version 1.0.0');
    process.exit(0); // - 1 Codigo de error
}
if (options.port) {
    console.log(options.test);
    PORT = options.port;
}
const server = createServer((request, response) => {
    if (request.method !== 'GET') {
        server.emit('error', new Error(`unsupported method ${request.method}`));
    }
    const { url } = request;
    const params1 = new URLSearchParams(url);
    const params2 = new URLSearchParams(url);
    const num1 = Number(params1.get('/calculator?a'));
    const num2 = Number(params2.get('b'));
    response.write(`<p>${num1} + ${num2} = ${num1 + num2}</p>`);
    response.write(`<p>${num1} - ${num2} = ${num1 - num2}</p>`);
    response.write(`<p>${num1} * ${num2} = ${num1 * num2}</p>`);
    response.write(`<p>${num1} / ${num2} = ${num1 / num2}</p>`);
    response.write(`<p>${num1} % ${num2} = ${num1 % num2}</p>`);
    console.log(request.method, request.url, 'Hola Mundo');
    response.end();
});
server.listen(PORT);
// Métodos de escucha
server.on('listening', () => {
    console.log(`Listening on port ${PORT}`);
});
server.on('error', (error) => {
    console.log(`Error ${error.message}`);
});
/*
Const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
console.log(params.get('a'));
console.log(params.get('b'));

const a = params.get('a');
const b = params.get('b');
const c = a + b;
console.log(c);
*/
