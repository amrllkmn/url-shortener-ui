import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import UrlApi from "@/apis/urlApi";

const useUrls = () => {
  const [isStale, setIsStale] = useState(true);
  const queryClient = useQueryClient();
  const { data: urls, status: urlStatus } = useQuery("urls", UrlApi.getUrls, {
    enabled: !!isStale,
    refetchInterval: 1000,
    onSuccess: (data) => {
      if (data) {
        setIsStale(false);
      }
    },
  });

  const {
    mutate: urlMutate,
    status: urlMutateStatus,
    data: urlMutateData,
    reset: urlMutateReset,
  } = useMutation(UrlApi.postUrls, {
    onSuccess: () => {
      setIsStale(true);
      queryClient.invalidateQueries("urls");
    },
  });
  return {
    urls,
    urlStatus,
    urlMutate,
    urlMutateStatus,
    urlMutateData,
    urlMutateReset,
  };
};

export default useUrls;
