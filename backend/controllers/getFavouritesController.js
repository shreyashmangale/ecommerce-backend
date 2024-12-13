const {client} = require('../dbConnection')
 
const getFavouritesItems = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('favourites');  // Select the collection

        // const result = await collection.find({}).toArray();
        const result = await collection.find({}).toArray();
        
        //console.log('Document fetched:', result);
        return res.status(200).json(result);
    }catch(error){
        throw error;
    }
}

const getFavouritesItemsLength = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('favourites');  // Select the collection

        const favouritesLength = (await collection.find({}).toArray()).length;

        return res.status(200).json({favouritesLength: favouritesLength});
    }catch(error){
        throw error;
    }
}


module.exports = { getFavouritesItems, getFavouritesItemsLength }