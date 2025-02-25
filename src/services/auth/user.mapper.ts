import { UserStore } from "@interfaces";

export const userMapper = (data: any): UserStore => {
  return {
    user: {
      id: data._id,
      name: data.first_name,
      image: data.image,
      email: data.email,
    },
    token: data.token,
  };
};
