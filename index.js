import Redis from "ioredis";

const redis = new Redis();

redis.set("hello", "world");

redis.get("hello", (err, res) => {
    console.log(res);
});

