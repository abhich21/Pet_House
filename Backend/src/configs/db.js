const mongoose = require('mongoose');

const connect = () => {
return mongoose.connect(`mongodb://localhost:27017/petboarding`);

}

module.exports = connect



// mongodb+srv://PETBOARDINGSITE:PETBOARDINGSITE@cluster0.pytlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

