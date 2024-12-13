const {client} = require('../../dbConnection')


const addToFavourites =  async (req, res) => {
    
    const data = req.body;
    //console.log(data);
    try {
        
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('favourites');  // Select the collection

        //Check if the item is already present
        const existingItem = await collection.findOne({ id: data.id });
        if (!existingItem) {
            //If the item is not present in favourites then Insert a single document
            const result = await collection.insertOne(data);
            res.status(201).json({ message:"Succesfully added to favourites" , data: data})
            //console.log("Succesfully added to favourites", result);
        } else {
            //If the item is present in the cart then show message already added in cart
            //console.log("Already added to favourites");
            res.status(409).json("Already added to favourites")
        }
    }catch(err){
        //console.log(err);
        
    }
}



module.exports = { addToFavourites }