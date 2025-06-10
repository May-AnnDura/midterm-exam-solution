const express = require('express');

const app = express();

const PORT = 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! MAY - ANN DURA' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Test the route: http://localhost:${PORT}/test`);
});