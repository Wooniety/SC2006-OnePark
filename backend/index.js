require('dotenv').config({ path: '.env' });

const app = require('./controller/app.js');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/`);
});