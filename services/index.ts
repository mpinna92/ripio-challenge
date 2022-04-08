import axios from "axios";
import { ES_KEY, API_URI } from "config";

interface GetDataCrypto {
  params: {
    module?: string;
    action?: string;
    address?: string;
    startblock?: string;
    endblock?: string;
    page?: string;
    offset?: string;
    sort?: string;
  };
}

const baseParams = {
  key: ES_KEY,
};

export const getCryptos = async ({ params }: any) => {
  const url: string = `${API_URI}?module=${params.module}&action=${params.action}&address=${params.address}&startblock=${params.startblock}&endblock=${params.endblock}&page=${params.page}&offset=${params.offset}&sort=${params.sort}&apikey=${baseParams.key}`;
  const data = await fetch(url);
  return data;
};
