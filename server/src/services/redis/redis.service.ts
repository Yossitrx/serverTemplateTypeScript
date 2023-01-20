import { client } from "../../index";
import { ISomeInterface } from "../../types/types.interface";

export const redisServiceUsage = async (
  response: ISomeInterface
): Promise<void> => {
  await client.set(response.key, JSON.stringify(response.value));
  return JSON.parse(await client.get("key"));
};
