const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        /* useUnifiedTopology: true */ //Esta línea está causando conflictos con el driver de mongoDB
    })
    .then(res => console.log('DB is connected'))
    .catch(err => console.error(err));
