const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);






describe('GET /myPlants', () => {
  it("retrieves plants", (done) => {
    request
      .get("/myPlants")
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

})

