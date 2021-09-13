import axios from "axios";

const main = axios.create({
  baseURL: "/api",
});

export { main };
