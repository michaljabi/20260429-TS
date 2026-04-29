import http, {IncomingMessage, ServerResponse} from 'node:http'
import { message } from "./message";

const server = http.createServer( (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200);
    res.end(`${message}. You had visited ${req.url}.`);
});

server.listen(8090, () => {
    console.log('Server is listening on port 8090')
});
