const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONN_STR, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(res => console.log('DB is connected'))
    .catch(err => console.error(err));
