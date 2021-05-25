import axios from "axios";

const fetcher = async (method, url, data) => {
  const response = await axios({
    method,
    url,
    data,
  });

  return await response.data;
};

export default fetcher;
