const app = require('./app');
const config = require('./config/config.js');

const PORT = config.SERVER_PORT;
const HOST_URL = config.HOST_URL;

app.listen(PORT, () => {
    console.log(`SERVER ON PORT IN ${HOST_URL}:${PORT}`);
});
