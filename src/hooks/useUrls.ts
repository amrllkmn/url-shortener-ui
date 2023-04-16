import { useQuery, useQueryClient } from "react-query";
import UrlApi from "@/apis/urlApi";

const useUrls = () => {
  const queryClient = useQueryClient();
  const { data: urls, status: urlStatus } = useQuery("urls", UrlApi.getUrls);
  return { urls, urlStatus };
};

export default useUrls;
