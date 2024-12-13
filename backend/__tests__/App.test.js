const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("../app.js");

let mongoServer;

beforeAll(async () => {
    // Close any existing connection
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe("GET /products", () => {
    it("should return a list of products", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
describe("GET /cart", () => {
    it("should return a list of cart items", async () => {
        const res = await request(app).get("/cart");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
describe("GET /favourites", () => {
    it("should return a list of favourites items", async () => {
        const res = await request(app).get("/favourites");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

describe("POST /api/cart", () => {
    it("should create a new cart entry", async () => {
        const res = await request(app)
            .post("/api/cart")
            .send({ 
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
                id: 210,
                description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            });


        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("message", "Succesfully added to cart")
    });
});


describe("POST /api/favourites", () => {
    it("should create a new favourites entry", async () => {
        const res = await request(app)
            .post("/api/favourites")
            .send({ 
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
                id: 210,
                description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            });


        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("message", "Succesfully added to favourites")
    });
});
