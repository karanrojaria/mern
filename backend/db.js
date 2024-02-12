const mongoose =require('mongoose');

const mongo = ()=>{
    const url='mongodb://karan:Karan123@ac-wk8fahg-shard-00-00.bfkwldm.mongodb.net:27017,ac-wk8fahg-shard-00-01.bfkwldm.mongodb.net:27017,ac-wk8fahg-shard-00-02.bfkwldm.mongodb.net:27017/karan?replicaSet=atlas-fejoyd-shard-0&ssl=true&authSource=admin'
    mongoose.connect(url);
    console.log("mongodb connected");
}
module.exports = mongo;