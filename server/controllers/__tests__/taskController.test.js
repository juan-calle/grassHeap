const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);
const mocks = require("./mocks");
const db = require("../../models/database");
const Task = require("../../models/Task");

async function clearCustomTasks() {
  await Task.deleteMany({ userCreated: true });
}

describe("Testing /task endpoints", () => {
  // afterEach(() => {
  //   return clearCustomTasks();
  // });
  it("should receive stored tasks", (done) => {
    request
      .get("/tasks")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(21);
        done();
      });
  });
  it("should add new tasks to the tasks collection", (done) => {
    request
      .post("/tasks")
      .set("Content-Type", "application/json")
      .send(mocks.customTask1)
      .expect(201)
      .end(() => {
        request
          .get("/tasks")
          .expect("Content-Type", /json/)
          .then((res) => {
            return Task.exists({ crop: "potato" });
          })
          .then((boolAnswer) => {
            expect(boolAnswer).toBe(true);
            clearCustomTasks();
            done();
          });
      });
  });

  it("should add and delete task", (done) => {
    request
      .post("/tasks")
      .set("Content-Type", "application/json")
      .send(mocks.customTask1)
      .expect(201)
      .then(async () => {
        const taskToDelete = await Task.findOne(
          { crop: "potato" },
          (err, obj) => obj
        );
        const taskDel = await request
          .del("/tasks")
          .set("Content-Type", "application/json")
          .send({ _id: taskToDelete._id });
        return taskDel;
      })
      .then((result) => {
        expect(result.status).toBe(201);
        done();
      });
  });
});

//it shouldn't save twice the exact same task
