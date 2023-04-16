import { useQuery, useQueryClient } from "react-query";

const useUrls = () => {
  const queryClient = useQueryClient();
  const { data: urls, status: urlStatus } = useQuery("urls", async () => {});
};
