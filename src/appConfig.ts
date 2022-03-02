let type = "local";

let domain =
  type === "local"
    ? "http://localhost:8080/"
    : "https://server.transcoders.run/";

export const appConfig = {
  email: domain + "sendmail",
};
