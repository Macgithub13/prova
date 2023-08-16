import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const server=express();

server.use(cors());
server.use(express.json());

// server.get('/tarefa');
server.post('/addtarefa', (req,resp) => {

    let digitartarefa=req.body.tarefa;

    resp.send({
        
        tarefa:digitartarefa});
});

// server.put();
// server.delete();
// server.get();
server.listen(process.env.PORT, 
    () => console.log(`API online na porta ${process.env.PORT}`));