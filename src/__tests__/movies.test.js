
import request from 'supertest'

import { mongoConnect, mongoDisconnect } from "../services/mongo.js";
import app from '../app.js';

jest.setTimeout(10000)
const movie = {
    title : "New Movie is being Creates",
    director: "Me Boligno Abdul"
 }

 const movieWithoutTitle = {
    director: "Me Boligno Abdul"
 }

describe("Movie API tests", () =>{
beforeAll( async() =>{
    await mongoConnect()
})

afterAll( async() =>{
    await mongoDisconnect()
})
describe("Welcome APi message", () =>{
    test("It should return 200 and Welcome message ", async () =>{
        const {body} = await request(app)
        .get("/api/v1/")
        .expect("Content-Type", /json/)
        .expect(200)
    expect(body.message).toStrictEqual("Welcome to the movie api")
    })

})

describe("APi Tests",() =>{
    test("It should return a list of movies", async () =>{
        const {body} = await request(app)
        .get("/api/v1/movies")
        .expect("Content-Type", /json/)
        .expect(200)
    })
    
    test("It should return 201 and create a movie", async () =>{
      const {body} =   await request(app)
        .post("/api/v1/movies")
        .send(movie)
        .expect("Content-Type", /json/)
        .expect(201)
    })
    
    test("It should return 400 ", async () =>{
        const {body} = await request(app)
        .post("/api/v1/movies")
        .send(movieWithoutTitle)
        .expect("Content-Type", /json/)
        .expect(400)
    })
})



})