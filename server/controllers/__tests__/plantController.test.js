const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);
const mocks = require("./mocks");
const db = require("../../models/database");
const Plant = require("../../models/Plant");

async function clearMyPlantsCollection() {
  await db.dropCollection("myplants");
}

async function createMyPlantsCollection() {
  await db.createCollection("myplants");
}

/*
post

post and get

post, get and delete
describe endpoint
    describe function
*/

describe("/myPlants endpoint", () => {
  beforeEach(() => {
    return createMyPlantsCollection();
  });
  afterEach(() => {
    return clearMyPlantsCollection();
  });
  it("should post plant to myplants collection", (done) => {
    request
      .post("/myPlants")
      .set("Content-Type", "application/json")
      .send(mocks.myPlants1)
      .expect(201)
      .end(() => {
        request
          .post("/myPlants")
          .set("Content-Type", "application/json")
          .send(mocks.myPlants2)
          .expect(201)
          .end(done);
      });
  });
  it("should retrieve plants", (done) => {
    request
      .post("/myPlants")
      .set("Content-Type", "application/json")
      .send(mocks.myPlants1)
      .expect(201)
      .end(() => {
        request
          .post("/myPlants")
          .set("Content-Type", "application/json")
          .send(mocks.myPlants2)
          .expect(201)
          .end(() => {
            request
              .get("/myPlants")
              .expect("Content-Type", /json/)
              .expect(200)
              .then((res) => {
                expect(res.body.length).toBe(2);
                done();
              });
          });
      });
  });
  it("should delete plants", (done) => {
    // const collectionSize = db.collection("myplants").count({});
    request
      .post("/myPlants")
      .set("Content-Type", "application/json")
      .send(mocks.myPlants1)
      .end(() => {
        request
          .post("/myPlants")
          .set("Content-Type", "application/json")
          .send(mocks.myPlants2)
          .end(() => {
            request
              .del("/myPlants")
              .set("Content-Type", "application/json")
              .send({ plantID: mocks.myPlants2.plantID })
              .expect(202)
              .then((response) => {
                return Plant.countDocuments({}, (err, count) => {
                  return count;
                });
              })
              .then((size) => {
                expect(size).toBe(1);
                done();
              })
              .catch((err) => {
                console.log("err", err);
                done(err);
              });
          });
      });
  });
});
