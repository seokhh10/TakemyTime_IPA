const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(require("./Routes"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/takemytime_IPA',
    {
        useFindAndModify: false,
        useNewUrlParse: true,
        useUnifiedTopology: true,
    }
);

//log mongo queries being used
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));