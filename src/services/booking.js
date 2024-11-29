import axios from "axios";
import { baseurl, createBooking, getBookingDate } from "../config";
export const getBookingDateApi = async (id) => {
  let data = await axios.get(`${baseurl}${getBookingDate}?vechicleId=${id}`);
  return data;
};

export const createBookingApi = async (data) => {
  let res = await axios.post(`${baseurl}${createBooking}`, data);
  return res;
};
