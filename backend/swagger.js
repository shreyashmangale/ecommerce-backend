const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'E-Commerce Backend',
    description: 'Capstone Project Module 4'
  },
  host: 'https://ecommerce-backend-w61s.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/post_api/postCartRoutes.js', './routes/post_api/postFavouritesRoutes.js',
  './routes/getCartRoutes.js', './routes/getFavouritesRoutes.js', './routes/productRoutes.js', './routes/searchRoutes.js'
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);