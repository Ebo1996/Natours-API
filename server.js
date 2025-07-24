const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
