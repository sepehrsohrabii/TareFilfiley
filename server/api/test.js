const axios = require("axios").default;

const getUser = async () => {
  try {
    const response = await axios.get("/user", {
      params: {
        ID: 12345,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
