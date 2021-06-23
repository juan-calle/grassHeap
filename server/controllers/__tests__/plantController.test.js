const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);
const mocks = require('./mocks');
const db = require('../../models/database');

async function clearMyPlantsDB () {
  await db.dropCollection('myplants');
}

afterAll(() => {
  return clearMyPlantsDB();
})

describe('POST /myPlants', () => {
  it('should post plant to myplants collection', (done) => {
    request
      .post('myPlants')
      .send(mocks.myPlants1)
    .expect(201)
  })
})


describe('GET /myPlants', () => {
  it("retrieves plants", (done) => {
    request
      .get("/myPlants")
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

})

