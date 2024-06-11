const mongoose = require('mongoose');

// Joto dhoroner connection ase : server/mongodb etc sob hobe ekhane



async function main() {
    await mongoose.connect(process.env.DATABASE_URL);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

