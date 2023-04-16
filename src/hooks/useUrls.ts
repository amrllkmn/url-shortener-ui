import { useMutation, useQuery, useQueryClient } from "react-query";
import UrlApi from "@/apis/urlApi";

const useUrls = () => {
  const queryClient = useQueryClient();
  const { data: urls, status: urlStatus } = useQuery("urls", UrlApi.getUrls);

  const urlMutation = useMutation(UrlApi.postUrls, {
    onSuccess: () => {
      queryClient.invalidateQueries("urls");
    },
  });
  return { urls, urlStatus, urlMutation };
};

export default useUrls;
