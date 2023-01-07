const express = require("express");
const app = express();
const pool = require('./db');


app.get('/reviews/:product_id/sort/:sort', async (res, req) => {
  try {
    console.log('product_id', req.req.params.product_id);
    console.log('sort', req.req.params.sort);
    let sort = req.req.params.sort;
    if (req.req.params.sort === 'newest') {
      sort = 'date';
    } else if (req.req.params.sort === 'relevant') {
      sort = 'rating';
    }
    const top5 = await pool.query(`SELECT * FROM reviews WHERE "product_id" = ${req.req.params.product_id} ORDER BY ${sort} DESC`);
    console.log(top5.rows);
    req.json(top5.rows);
  } catch (err) {
    console.log(err);
  }
});


app.get('/reviews/:product_id', async (res, req) => {
  try {
    console.log('product_id', req.req.params.product_id);
    const top5 = await pool.query(`SELECT * FROM reviews WHERE "product_id" = ${req.req.params.product_id}`);
    console.log(top5.rows);
    req.json(top5.rows);
  } catch (err) {
    console.log(err);
  }
});


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

