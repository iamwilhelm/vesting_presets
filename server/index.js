const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3010;

app.use(cors());
app.use(bodyParser());

let securities = [
  {
    id: 1,
    vesting_start_date: "2020-07-22T15:15:24.394Z",
    has_cliff: true,
    cliff_duration: 12,
    cliff_percentage: 25,
    vesting_duration: 48
  }
];

let vesting_schedules = [
  {
    id: 1,
    name: "1/48 months, 1 year cliff",
    has_cliff: true,
    cliff_duration: 12,
    cliff_percentage: 25,
    vesting_duration: 48
  },
  {
    id: 2,
    name: "1/36 months, 1 year cliff",
    has_cliff: true,
    cliff_duration: 12,
    cliff_percentage: 25,
    vesting_duration: 36
  }
];

app.get("/", (req, res) => res.send("Pulley Server!!"));

app.get("/securities", cors(), (req, res) => {
  res.json({
    securities: securities
  });
});

app.get("/securities/:id", cors(), (req, res) => {
  let security = securities.find(sec => {
    return sec.id === parseInt(req.params.id);
  });
  res.json({ security });
});

app.post("/securities", cors(), (req, res) => {
  securities.push({
    vesting_start_date: req.body.vesting_start_date,
    has_cliff: req.body.has_cliff,
    cliff_duration: req.body.cliff_duration,
    cliff_percentage: req.body.cliff_percentage,
    vesting_duration: req.body.vesting_duration
  });
});

app.get("/vesting_schedules", cors(), (req, res) => {
  res.json({ vesting_schedules });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
