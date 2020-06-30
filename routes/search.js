const express = require('express');
const { database } = require('pg/lib/defaults');
const poolFactory = require('pg/lib/pool-factory');
const router  = express.Router();
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

const typeList = (db) => {
  const type = {};
  for(let item of db ) {
    if (!type[item.type]) {
      type[item.type] = 1
    } else {
      type[item.type]++;
    }
  }
  return type;
}

const searchItems = function(options) {
  const queryParams = [];
  const query = {};
  let queryString = `SELECT * FROM items`;


  if (options.searchbar) {
    const inputType = options.searchbar;
    const capitalized = inputType[0].toUpperCase() + inputType.slice(1);
    queryParams.push(`%${capitalized}%`);
    queryString += ` WHERE title LIKE $${queryParams.length}
    `;
  }

  if (options.type) {
    queryParams.push(`${options.type}`);
    queryString += `${queryParams.length === 1 ? ' WHERE' : ' AND'} type = $${queryParams.length}`;
  }

  if (options.minimum_price) {
    queryParams.push(`${options.minimum_price}`);
    queryString += `${queryParams.length === 1 ? ' WHERE' : ' AND'} price >= $${queryParams.length}`;
  }

  if (options.maximum_price) {
    queryParams.push(`${options.maximum_price}`);
    queryString += `${queryParams.length === 1 ? ' WHERE' : ' AND'} price <= $${queryParams.length}`;
  }

  query["text"] = queryString;
  query["values"] = queryParams;
  console.log(queryString);
  console.log(query);

  return db.query(query).then((res) => res.rows);

}

module.exports = (db) => {
  router.get("/new", (req, res) => {

    db.query(`SELECT * FROM items;`)
      .then(data => {
        const items = data.rows;
        const types = typeList(items);
        const username = req.session["username"];
        const templateVar = { types: types, user: username }
        res.render("search", templateVar)
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });


  router.post("/new", (req, res) => {
    searchItems({...req.body})
      .then(options => {
        res.json(options);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  })
  return router;
}


