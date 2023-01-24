import axios from "axios";

const questionService = {
  getQuestions: async (params) => {
    const res = await axios.get(`https://the-trivia-api.com/api/questions`, {
      params,
    });
    return res.data;
  },
};

export default questionService;
