import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPost = () => {
  //   const id = queryData.queryKey[1];
  return axios.get(`https://my-json-server.typicode.com/posts`);
};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
};
