import axios from "axios";
import { baseurl, getList } from "../config";

export const getVechicleList = async (wheels, type, model) => {
  let params = `?`;
  if (wheels) params += `wheels=${wheels}&`;
  if (type) params += `type=${type}&`;
  if (model) params += `model=${model}&`;

  let list = await axios.get(`${baseurl}${getList}`);
  return list;
};
