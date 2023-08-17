import axios from "axios";

let URL;

switch (process.env.REACT_APP_DEVELOPMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/";
    break;
  case "PRODUCTION":
    URL = "http://productionserver.com/";
    break;
  default:
    URL = "http://localhost:5000/";
}

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "products" },
});

export default instance;
