import { client } from "../index";
import { ISomeInterface } from "../types/types.interface";

export const getSomeComponent = async (id: string): Promise<ISomeInterface> => {
  const redisRes = await client.get(id);
  if (redisRes) {
    const someInterface: ISomeInterface = JSON.parse(redisRes);
    return someInterface;
  } else {
    throw new Error("someInterface Does not exist");
  }
};
