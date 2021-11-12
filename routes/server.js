const { response } = require('express');
var express = require('express');
var router = express.Router();
const db = require("../model/helper");
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send({ message: "Hello world!" });
});

module.exports = router;

//get all from table --- will need to change table name

router.get('/image_puzzle', async (req, res) => {
  let sql = 'SELECT * FROM image_puzzle';
  try {
    let data = await db(sql);
    let result = data.data;
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//get by id

router.get('/image_puzzle/:id', async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM image_puzzle WHERE image_id = ${id}`
  try {
    let data = await db(sql);
    let result = data.data;
    if (result.length === 0) {
      res.status(404).send({error: "Not found."})
    } else {
      res.send(result);
    }
  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//post new to table ---will need to change table name

router.post('/image_puzzle', async (req, res) => {
  //WILL NEED UPDATING  
  let {image_set, difficulty_level, player_name, player_age, player_score, puzzle_completed} = req.body;
  let sql = 'SELECT * FROM image_puzzle';
  let updatesql = 
  `INSERT INTO image_puzzle (image_set, difficulty_level, player_name, player_age, player_score, puzzle_completed)
  VALUES ("${image_set}", ${difficulty_level}, "${player_name}", ${player_age}, ${player_score}, "${puzzle_completed}")
  `;
  try {
    //update the table
    await db(updatesql);
    //return everything
    let data = await db(sql);
    let result = data.data;
    res.status(201).send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
});

//delete item by id return what's left

router.delete('/image_puzzle/:id', async(req, res) => {
    let id = req.params.id;
    let deletesql = `DELETE FROM image_puzzle WHERE image_id = ${id}`;
    let sql = 'SELECT * FROM image_puzzle';
    try {
      await db(deletesql);
      let data = await db(sql);
      let result = data.data;
      res.send(result);
    } catch(err) {
      res.status(500).send({error: err.message});
    }
});

//update table by id return updated info only

router.put('/image_puzzle/:id', async (req, res) => {
  let id = req.params.id;
  let {image_set, difficulty_level, player_name} = req.body;
  let updatesql = `UPDATE image_puzzle
  SET image_set = "${image_set}", difficulty_level = ${difficulty_level}, player_name= "${player_name}"
  WHERE image_id = ${id}
  `;
  let sql = `SELECT * FROM image_puzzle WHERE image_id = ${id}`;
  try {
    await db(updatesql);
    let data = await db(sql);
    let result = data.data;
    res.send(result);

  } catch(err) {
    res.status(500).send({error: err.message});
  }
}); 