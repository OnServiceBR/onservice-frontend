import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "https://onservice-backend.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
