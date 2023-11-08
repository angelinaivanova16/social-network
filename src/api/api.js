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
  changePageNumber(pageNumber, pageSize) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followAPI = {
  followUser(id) {
    // debugger
    return instance
      .post(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollowUser(id) {
    return instance
      .delete(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const authMeAPI = {
  authMe() {
    return instance
      .get(`auth/me`)
      .then((response) => {
        return response.data;
      });
  },
};

export const profileAPI = {
  setUserProfile(userId) {
    return instance
      .get(`profile/` + userId)
      .then((response) => {
        return response.data;
      });
  }
};