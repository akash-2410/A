const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;
connection.on( 'error', ()=>{
    console.log("Error connecting to Database");
});
connection.on( 'connected', ()=>{
    console.log(" Connected to Database");
});
module.exports = connection;