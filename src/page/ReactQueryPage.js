// const ReactQuery = () => {
//   const { data, isLoading, isError, error, refetch } = usePostQuery();
//   console.log("ddd", isLoading, data);
//   console.log("eee", isError, error);

import { useQueries } from "@tanstack/react-query";
import axios from "axios";

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   return (
//     <div>
//       {data?.map((item, index) => (
//         <div key={index}>{item.title}</div>
//       ))}
//       <button onClick={refetch}>post 리스트 다시 들고오기</button>
//     </div>
//   );
// };

const ReactQueryPage = () => {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    console.log("fetch");
    return axios.get(`https://my-json-server.typicode.com/posts/${id}`);
  };

  const result = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (result) => {
      return {
        data: result.map((result) => result.data.data),
      };
    },
  });

  console.log("rrr", result);
  return <div></div>;
};

export default ReactQueryPage;
