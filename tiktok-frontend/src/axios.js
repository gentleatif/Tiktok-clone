import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-ocean-22934.herokuapp.com",
});

export default instance;
