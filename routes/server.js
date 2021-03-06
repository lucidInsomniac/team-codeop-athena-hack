const { response } = require('express');
var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const { ensureSameUser} = require('../middleware/guards')
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send({ message: "Hello world!" });
});

module.exports = router;

//const for sql get all by userid statements
const getallbyuserid = `SELECT DISTINCT
mood.id,
mood.userid,
mood.mood1,
mood.mood2,
mood.mood3,
mood.mood4,
mood.mood5,
mood.addedOn,
symptoms.sleep_pattern,
symptoms.substances,
symptoms.swings,
symptoms.social,
symptoms.submittedOn
FROM mood 
INNER JOIN symptoms ON mood.addedOn = symptoms.submittedOn
WHERE mood.userid =`;

//get all mood entries by userid
router.get('/mood/:id', async (req, res) => {
  let id = req.params.id;
  try {
    let data = await db(getallbyuserid+id);
    let result = data.data;
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//get all mood entries by userid FROM CURRENT MOODFORM
router.get('/moodform/:id', async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM moodform WHERE userid = ${id}`
  try {
    let answer = await db(sql);
    let result = answer.data;
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//post  mood entries by userid FROM CURRENT MOODFORM
router.post('/moodform/:id', async (req, res) => {
  let id = req.params.id;
  let {dateadded, mood, sleeping, substances, swings, friends} = req.body;
  let sql = `INSERT INTO moodform (userid, dateadded, mood, sleeping, substances, swings, friends)
  VALUES (${id}, "${dateadded}", "${mood}", "${sleeping}", "${substances}", "${swings}", "${friends}")`;
  try {
    //update the table
    await db(sql);
    //return everything by userid
    let data = await db(`SELECT * FROM moodform WHERE userid = ${id}`);
    let result = data.data;
    res.status(201).send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});
//get the users 
router.get('/users', async (req, res) => {
  let sql = `SELECT * FROM User`;
  try {
    let data = await db(sql);
    let result = data.data;
    result.forEach(u => delete u.password);
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//get user by id
router.get('/users/:id', ensureSameUser, async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM User WHERE userid= ${id}`;
  try {
    let data = await db(sql);
    let result = data.data;
    result.forEach(u => delete u.password);
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//delete user by id
router.delete('/users/:id', ensureSameUser, async(req, res) => {
  let id = req.params.id;

  let deletesql = `DELETE FROM users WHERE userid = ${id}`;
  try {
    await db(deletesql);
    let data = await db(`SELECT * FROM User`);
    let result = data.data;
    res.send(result);
  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//add new mood&symptoms by userid

router.post('/mood/:id', async (req, res) => {
  let id = req.params.id;
  let {mood1, mood2, mood3, mood4, mood5, sleep_pattern, substances, swings, social} = req.body;
  let sqlmood = 
  `INSERT INTO mood (userid, mood1, mood2, mood3, mood4, mood5)
  VALUES (${id}, ${mood1}, ${mood2}, ${mood3}, ${mood4}, ${mood5})
  `;
  let sqlsymptoms = 
  `INSERT INTO symptoms (userid, sleep_pattern, substances, swings, social)
  VALUES (${id}, "${sleep_pattern}", "${substances}", "${swings}", "${social}")
  `;
  try {
    //update the table
    await db(sqlmood);
    await db(sqlsymptoms);
    //return everything by userid
    let data = await db(getallbyuserid+id);
    let result = data.data;
    res.status(201).send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//delete item by entry id and return what's left by userid
//POSTMAN example --- localhost:5000/mood/2?userid=1
router.delete('/mood/:id', async(req, res) => {
    let id = req.params.id;
    let userid = req.query.userid;
    let deletesql = `
    DELETE mood, symptoms
    FROM mood
    INNER JOIN symptoms ON mood.addedOn = symptoms.submittedOn
    WHERE mood.id = ${id}`;
    try {
      await db(deletesql);
      let data = await db(getallbyuserid+userid);
      let result = data.data;
      res.send(result);
    } catch(err) {
      res.status(500).send({error: err.message});
    }
});

//update table by id return updated by userid

router.put('/mood/:id', async (req, res) => {
  let id = req.params.id;
  let userid = req.query.userid;
  let {mood1, mood2, mood3, mood4, mood5, sleep_pattern, substances, swings, social} = req.body;
  let updatesql = `UPDATE mood INNER JOIN symptoms ON (mood.addedOn = symptoms.submittedOn)
  SET
  mood.mood1 = ${mood1}, mood.mood2 = ${mood2}, mood.mood3 = ${mood3}, mood.mood4 = ${mood4}, mood.mood5 = ${mood5},
  symptoms.sleep_pattern = "${sleep_pattern}", symptoms.substances = "${substances}", symptoms.swings = "${swings}", symptoms.social = "${social}"
  WHERE mood.id = ${id}
  `;
  try {
    await db(updatesql);
    let data = await db(getallbyuserid+userid);
    let result = data.data;
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
}); 


