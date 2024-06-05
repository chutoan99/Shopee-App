import axios from "axios";
import { ILoginData, IRegisterData } from "../interfaces";

export const ApiLogin = async (payload: ILoginData) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/client/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  };
  axios
    .request(config)
    .then((response) => {
      console.log(response,"response")
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const ApiRegister = async (payload: IRegisterData) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/client/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: payload.name,
        password: payload.password,
        email: payload.email,
      }),
    };

    const response = await axios.request(config);
    console.log(response, "response");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    // toast.error(error.msg)
  }
};
