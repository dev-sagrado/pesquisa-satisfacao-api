require('dotenv').config();  // Carregar variáveis de ambiente do .env
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
