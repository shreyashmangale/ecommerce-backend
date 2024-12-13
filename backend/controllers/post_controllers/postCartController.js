const {client} = require('../../dbConnection')

const addToCart = async (req, res) => {

    const data = req.body;
    const productId = data.id;
    //console.log(data);
    try {
        const newData = {
            ...data,
            quantity: 1
        }
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('cart');  // Select the collection


        //Check if the item is already present
        const existingItem = await collection.findOne({ id: data.id });
        if (!existingItem) {
            //If the item is not present in cart then Insert a single document
            const result = await collection.insertOne(data);
            res.status(201).json({ message:"Succesfully added to cart" , data: data})
            //console.log("Succesfully added to cart", result);
        } else {
            //If the item is present in the cart then show message already added in cart
            //console.log("Already added to cart");
            res.status(409).json("Already added to cart")
        }


    } catch (err) {
        //console.log(err)
    }
}

module.exports = {  addToCart }