import axios from "axios";
import { baseurl, createUser } from "../config";

export const createUserApi = async (data) => {
  let data = await axios.post(`${baseurl}${createUser}`, data);
  return data;
};
