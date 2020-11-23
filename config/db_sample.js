const dbHost
const dbName
const user
const password

module.exports = {
    url : `mongodb://${user}:${password}@${dbHost}:27017/${dbName}`
  };  
