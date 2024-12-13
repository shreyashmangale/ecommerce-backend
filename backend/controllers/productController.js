const {client} = require('../dbConnection')
 
const getProducts = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('products');  // Select the collection

        // const result = await collection.find({}).toArray();
        const result = await collection.find({}).toArray();
        
        //console.log('Document fetched:', result);
        return res.status(200).json(result);
    }catch(error){
        throw error;
    }
}
const getProduct = async (req, res) => {
    
    const id = req.params.id;
    //console.log("id is : ", Number(id));
    
    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('products');  // Select the collection
        

        // Insert a single document
        const result = await collection.find({id: Number(id)}).toArray();
        //console.log(result[0]);
        
        //console.log('Document fetched:', result);
        return res.status(200).json(result[0]);
    }catch(error){
        throw error;
    }
}

const getCategorywiseProduct = async (req, res) => {
    const category = req.params.category;
    //console.log("category is : ", category);

    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('products');  // Select the collection

        // const result = await collection.find({}).toArray();
        const result = await collection.find({category: category}).toArray();
        
        //console.log('Document fetched:', result);
        return res.status(200).json(result);
    }catch(error){
        throw error;
    }
}


module.exports = {getProducts, getProduct , getCategorywiseProduct}