import { Redis } from "ioredis";
import config from "./config";
import { logger } from "./shared/logger";

const redisClient = () => {
  if (config.redisUrl) {
    logger.info("Redis Connected ✳️");
    return config.redisUrl;
  } else {
    throw new Error("Redis connection failed❗");
  }
};

export const redis = new Redis(redisClient());
