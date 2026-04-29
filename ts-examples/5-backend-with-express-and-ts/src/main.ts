import express, { Request, Response } from 'express';

const app = express();


let visitorCounter = 1;

app.get('/', (req: Request, res: Response) => {
    res.send(`
        Hello on MAIN(${req.url}) site 💙
        <div>You are the ${visitorCounter++} visitor</div>
    `)
})

app.put('/reset-visitors', (req: Request, res: Response) => {
    visitorCounter = 1;
    res.send('Visitor counter has been reset.')
})

app.listen(8099, () => {
    console.log('Server is listening on port 8099')
})
