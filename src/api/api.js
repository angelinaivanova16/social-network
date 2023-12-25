import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "02a42f21-fbc3-47f0-891b-7c8d1ad76e10",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const authMeAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`); //сервак куки наши удалит и будет считать, что мы не залогинены
  },
};

export const profileAPI = {
  setUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  // setUserImage(image) {
  //   return instance.put(`profile/photo`, {image: image})
  // }
};

export const statusAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    debugger;
    return instance.put(`profile/status`, { status: status });
  },
};
