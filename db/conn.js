const mongoose = require('mongoose');

async function main() {
  try {
    mongoose.set('strictQuery', true)

    await mongoose.connect(
      "mongodb+srv://Arthus:Thorpipoca10@cluster0.pqfvjdl.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Connected in DB!")
  } catch(error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main;