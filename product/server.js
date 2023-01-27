const express = require('express');
const axios = require('axios')
const app = express();

const PORT = 4001;
const userRouter = express.Router();

userRouter.get('/products', async (req, res, error) => {
    let response = await axios.get('https://dummyjson.com/products');

    console.log("response ", response.data);
    return res.send(response.data)
})


userRouter.get('/product/:id', async (req, res, error) => {
    console.log("params ", req.params.id);
    let productId = req.params.id;

    let response = await axios.get('https://dummyjson.com/products');

    console.log("response ", response.data);
    let product = response.data.products.find(product => {
        return product.id = productId
    });

    return res.send(product)
})

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server product started on port ${PORT}`);
});