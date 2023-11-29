import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ba24b964-489f-421c-8813-2f7e98f7798d",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`)
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
  },
};

export const authMeAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },
};

export const profileAPI = {
  setUserProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  // setUserImage(image) {
  //   return instance.put(`profile/photo`, {image: image})
  // }
};

export const statusAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    debugger
    return instance.put(`profile/status`, {status: status})
  }
};