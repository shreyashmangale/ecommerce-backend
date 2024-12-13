const {client} = require('../dbConnection')

const getCartItems = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('cart');  // Select the collection

        // const result = await collection.find({}).toArray();
        const result = await collection.find({}).toArray();

        //console.log('Document fetched:', result);
        return res.status(200).json(result);
    }catch(error){
        throw error;
    }
}
const getCartItemsLength = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('cart');  // Select the collection

        const cartLength = (await collection.find({}).toArray()).length;

        return res.status(200).json({cartLength: cartLength});
    }catch(error){
        throw error;
    }
}





module.exports = { getCartItems, getCartItemsLength }