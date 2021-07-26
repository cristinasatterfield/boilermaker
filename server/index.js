const PORT = process.env.PORT || 3000;
const app = require("./app");

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
