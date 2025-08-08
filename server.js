const { default: mongoose } = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");
const app = require("./app");

console.log('Connectiing to Database...');

mongoose.connect(MONGODB_URI).then(() => {

    console.log('Connected to Database!!!');
    console.log('Starting the server...');
    app.listen(PORT, () => {
        console.log('Server is running on PORT:', PORT);
    });

}).catch((err) => {

    console.error('Error connecting to the Database:', err.message);   

});