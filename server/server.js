const express = require('express');
const axios = require('axios');
const pool = require('./db');
const app = express();
const PORT = 3000;

app.use(express.static('../client'));

app.get('/api/fetch-and-store', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const top10 = Object.values(data).slice(0, 10);

    await pool.query('TRUNCATE TABLE crypto_data RESTART IDENTITY');

    const insertQuery = `
      INSERT INTO crypto_data (name, last, buy, sell, volume, base_unit)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    for (const crypto of top10) {
      const { name, last, buy, sell, volume, base_unit } = crypto;
      await pool.query(insertQuery, [name, last, buy, sell, volume, base_unit]);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Error fetching and storing data:', error);
    res.sendStatus(500);
  }
});

app.get('/api/crypto-data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM crypto_data');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
