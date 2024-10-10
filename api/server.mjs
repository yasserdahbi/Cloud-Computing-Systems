import express from 'express';  


export function createServer(){
    const app = express();
    app.get('/feature/:code',(req,res)=>{
        const code = req.params.code;
        res.json({
            code:code,
            enabled:true
        })
    });
    return app;
}