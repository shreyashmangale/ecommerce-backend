const {client} = require('../dbConnection')

const getSearchedItems = async (req, res) => {
    const searched_name =  req.query.searchedName;
    //console.log(searched_name);
    // const movie_name = req.params.movieName;
    // console.log(movie_name);

    try {
        await client.connect();
        const db = client.db('ecommercedb');  // Select the database
        const collection = db.collection('products');  // Select the collection
        

        // Insert a single document
        const result = await collection.find({ title: { $regex: searched_name, $options: "i" } }).toArray();
        //console.log(result);
        
        //console.log('Document fetched:', result);
        return res.status(200).json(result);
    }catch(error){
        throw error;
    }
}

module.exports = { getSearchedItems }