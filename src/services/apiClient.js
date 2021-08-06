import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:44317/api/Word/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});


export default {
getWord() {
    return apiClient.get("Get");
  },
  sendWord(word, index) {
      console.log(word)
    return apiClient.get("Check", {
      params: {
          name: word,
          index: index
      }
    });
  },

  getHelp(word, index)
  {
    return apiClient.get("Help", {
        params: {
            name: word,
            index: index
        }
    })
  }
};
