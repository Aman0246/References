//=============================REDIS   CONNECT===============================================
const redis = require('redis');
const { promisify } = require("util");

const redisClient = redis.createClient(
  14710,
  "redis-14710.c82.us-east-1-2.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("wWYaqcPQLd1ewRaug7BA8VbeifiQGA1z", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis");
});

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);git 