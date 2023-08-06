import axios from "axios";

const AuthenticationUser = (username, password) => {
  return axios
    .post(`http://localhost:8080/api/v1/loginUser`, {
      username,
      password,
    })
    .then((res) => {
      if (res != null) {
        console.log(res);
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthenticationUser;
