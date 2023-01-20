import express from "express";
import { createClient } from "redis";
import { API } from "./API/API.const";
import { getSomeComponent } from "./components/getSomeComponent";

export const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get(API.internalApi.SOME_API, async (req, res) => {
  try {
    res.json(await getSomeComponent("1"));
  } catch (e) {
    throw e;
  }
});

app.post(API.internalApi.SOME_API, async (req, res) => {
  try {
    const someThing = await getSomeComponent("1");
    res.send({ someThing });
  } catch (e) {
    res.status(404).send("someThing Does not exist");
  }
});

app.listen(port, async () => {
  // await client.connect();
  // await client.flushAll();
  console.log(`server started at on ${port}`);
});
