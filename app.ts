import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hola mundo')
});

let productos: any[]=[];

app.get('/productos',(req,res)=>{
    res.json(productos)
});

app.post('/productos',(req,res)=>{
    const {id, title, price, thumbnail} = req.body
    const producto = {
        id:id,
        title:title,
        price:price,
        thumbnail:thumbnail,
    }
    productos.push(producto)
    res.sendStatus(201)
})


app.get('/productos/:id',(req,res)=>{
    const id = req.params.id
    const producto = productos.find(gato=> gato.id === id)
    if (!producto) {
        res.sendStatus(404)
    }
   res.json(producto)
})



app.listen(5000,()=>console.log('server up'));
