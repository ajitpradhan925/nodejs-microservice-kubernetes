const express = require('express');

const app = express();

const PORT = 4000;

const users = [
    {
        id: 123,
        name: 'Ajit Pradhan',
        address: 'Dhenkanal',
        phone: '9668854799'
    },
    {
        id: 124,
        name: 'John',
        address: 'USA',
        phone: '7008310327'
    },
    {
        id: 125,
        name: 'Biswajit Pradhan',
        address: 'Dhenkanal',
        phone: '966s8310328'
    }
]

const userRouter = express.Router();

userRouter.get('/users', (req, res, error) => {
    return res.status(200).json(users)
})

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server customer started on port ${PORT}`);
});