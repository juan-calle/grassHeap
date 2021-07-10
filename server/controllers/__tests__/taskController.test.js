const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);
const mocks = require("./mocks");
const db = require("../../models/database");
const Task = require("../../models/Task");

async function clearCustomTasks() {
  await Task.deleteMany({ userCreated: true });
}

function postTask(data) {
  return request
    .post("/tasks")
    .set("Content-Type", "application/json")
    .send(data)
    .expect(201);
}

describe("Testing /task endpoints", () => {
  afterEach(() => {
    return clearCustomTasks();
  });
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
    postTask(mocks.customTask1).end(() => {
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
    postTask(mocks.customTask1)
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

  it("should only get tasks of a given month", (done) => {
    postTask(mocks.customTask1).end(() => {
      postTask(mocks.customTask2).end(() => {
        postTask(mocks.customTask3).end(() => {
          request
            .get("/tasks/month/august")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
              expect(res.body.length).toBe(2);
              done();
            });
        });
      });
    });
  });
});

//it shouldn't save twice the exact same task
