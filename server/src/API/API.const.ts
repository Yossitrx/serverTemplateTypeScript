export const API_PREFIX: string = "https://prefix";

export const API = {
  internalApi: {
    SOME_API: "/api/someApi",
  },
  externalApi: {
    someExternalApi: (param: string) => `${param}`,
  },
};
