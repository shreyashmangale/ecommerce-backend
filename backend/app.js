const express = require('express')
const app = express();
const cors = require('cors');

const productRoutes = require("./routes/productRoutes.js")
const getCartRoutes = require("./routes/getCartRoutes.js")
const getFavouritesRoutes = require("./routes/getFavouritesRoutes.js")
const postCartRoutes = require('./routes/post_api/postCartRoutes.js')
const postFavouritesRoutes = require('./routes/post_api/postFavouritesRoutes.js')
const searchRoutes = require('./routes/searchRoutes.js')

const SwaggerUi = require('swagger-ui-express')
const SwaggerDocument = require('./swagger-output.json');
const path = require('path');

app.use(cors())
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

//To open frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
})

app.use('/products', productRoutes)

app.use('/cart', getCartRoutes)

app.use('/favourites', getFavouritesRoutes)

app.use('/api/cart', postCartRoutes);

app.use('/api/favourites', postFavouritesRoutes)

app.use("/search", searchRoutes)


app.use('/api-documentation-ecommerce', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocument));

module.exports = app;