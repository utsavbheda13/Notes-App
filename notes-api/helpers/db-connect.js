// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://utsavbheda13:utsavbheda13@cluster0.07p69.mongodb.net/notes', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch(e => {
    console.log('Error while attempting to connect to MongoDB');
    console.log(e);
})

// To preven deprecation warnings (from MongoDB Native Driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);