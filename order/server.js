const express = require('express');

const app = express();

const PORT = 4002;

const router = express.Router();

const orders = [
    {
        id: 1,
        product_id: [1, 2, 3],
        created_on: new Date().toDateString(),
        customer_id: 1,
        total_amount: 2000,
        paid: true
    },
    {
        id: 2,
        product_id: [4, 5, 6],
        created_on: new Date().toDateString(),
        customer_id: 2,
        total_amount: 2500,
        paid: false
    }
]


router.get('/orders', (req, res, error) => {
    return res.send(orders)
})

router.get('/order/:id', (req, res, error) => {
    console.log("req.params.id ", req.params.id);
    let order = orders.find(item => item.id == req.params.id);
    return res.send(order);
});

router.get('/order/user/:id', (req, res, error) => {
    let order = orders.find(item => item.customer_id == req.params.id);
    return res.send(order);
});

app.use(router);

app.listen(PORT, () => {
    console.log(`Server order started on port ${PORT}`);
});