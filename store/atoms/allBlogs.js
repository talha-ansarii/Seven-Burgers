import axios from "axios";
import { atom, selector } from "recoil";

export const allBlogs = atom({
  key: "allBlogs", // unique ID (with respect to other atoms/selectors)
  default: selector({
    key: "allBlogs/default",
    get: async () => {
      try {
        const response = await axios.get(
          `https://backend.sevenburgers.workers.dev/api/v1/blog/allblogs`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return { success: false, message: "error while fetching blogs" };
      }
    },
  }),
});
