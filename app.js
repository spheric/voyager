const express = require('express')
const app = express()
const port = 8888
const fs = require('fs/promises');
const path = require('path');

async function readSchema() {
  try {
    return await fs.readFile('./schema.json', { encoding: 'utf8' });
  } catch (err) {
  }
}

app.get('/schema', async(req, res) => {
  const result = await readSchema()

  res.send(result)
})

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
