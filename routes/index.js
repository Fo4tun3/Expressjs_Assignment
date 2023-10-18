const express = require("express");
const router = express.Router();

const items = [
    {
        item: 'shoes',
        price: 2500,
        quantity: 50,
        colors: "red, blue, black, green, pink, white"
    },
    {
        item: 'bags',
        price: 1500,
        quantity: 25,
        colors: "red, blue, black, green, pink, white, magenta, violet, emerald"
    },
    {
        item: 'gowns',
        price: 2500,
        quantity: 75,
        colors: "red, blue, green, pink, white, emerald"
    },
    {
        item: 'shirts',
        price: 3500,
        quantity: 150,
        colors: "red, blue, black, green, pink, white"
    },
    {
        item: 'trousers',
        price: 5000,
        quantity: 200,
        colors: "blue, black, green, white"
    },
]

router.route("/items").get((req, res) => {
    return res.json(items);
}).post((req, res) => {
    items.push({ item: req.body.name,  });
    return res.json({ message: "New Item Created" }); 
})

router.route("/items/:id").get((req, res) => {
    const item = items.find(item => item.item === req.params.id);
    return res.json(item); 
})
.post((req, res) => {
    // items.push({ item: req.body.item,  });
    items.push(req.body);
    return res.json({ message: "New Item Created" }); 
})
.patch((req, res) => {
    const item = items.find(findItem => findItem.item === req.params.id); 
    item.item = req.body;
    return res.json({ message: "Item has been Updated" });
})
.delete((req, res) => {
    const itemIndex = items.findIndex(findItem => findItem.item === req.params.id); 
    items.splice(itemIndex, 1);
    return res.json({ message: "Item has been Deleted" });
})

module.exports = router;
