import { AxiosResponse } from "axios";
import transportService from "../services/transport";
import { CAR_SERVICE_URL, API_URL } from "../constants/api";

export const getCarsData = (): Promise<AxiosResponse> =>
  transportService(`${API_URL}${CAR_SERVICE_URL}`, {
    method: "GET",
  });
