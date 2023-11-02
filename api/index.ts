import axios from "axios";

export default axios.create({
  baseURL: "https://deckofcardsapi.com/api",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});