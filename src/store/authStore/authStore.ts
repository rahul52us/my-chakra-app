import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { action, makeObservable, observable } from "mobx";

interface Notification {
  title?: any;
  message: string;
  type?: any;
  placement?: string;
  action?: any;
}

class AuthStore {
  loading: boolean = false;
  user: any | null = null;
  notification: Notification | null = null;
  isRememberCredential = true;

  constructor() {
    this.initiatAppOptions();
    makeObservable(this, {
      user: observable,
      notification: observable,
      login: action,
      register: action,
      doLogout: action,
      openNotification: action,
      closeNotication: action,
      checkPermission: action,
      updateUserProfile: action,
      uploadUserPic: action,
      sendNotification: action,
    });
  }

  setAppAxiosDefaults = async () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
  };

  initiatAppOptions = () => {
    this.loading = true;
    this.setAppAxiosDefaults();
    const authorizationToken = process.env.REACT_APP_AUTHORIZATION_TOKEN;
    if (authorizationToken) {
      const token: string | null = localStorage.getItem(authorizationToken);
      if (token && token !== "undefined") {
        const headers: AxiosRequestConfig["headers"] = {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };
        Object.assign(axios.defaults.headers, headers);
        this.setUserOptions();
      } else {
        this.loading = false;
        this.user = null;
        this.clearLocalStorage();
      }
    } else {
      this.loading = false;
      this.user = null;
      this.clearLocalStorage();
    }
  };

  setUserOptions = () => {
    axios
      .post("/auth/me")
      .then(({ data }: AxiosResponse<{ data: any }>) => {
        this.user = data.data;
      })
      .catch(() => {
        this.loading = false;
        this.clearLocalStorage();
        this.initiatAppOptions();
      });
  };

  clearLocalStorage = () => {
    localStorage.removeItem(
      process.env.REACT_APP_AUTHORIZATION_TOKEN as string
    );
    localStorage.removeItem(process.env.REACT_APP_WEB_INFO_KEY as string);
  };

  updateUserProfile = async (sendData: any) => {
    try {
      const { data } = await axios.put("/auth/update-profile", sendData);
      this.user = data.data;
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  login = async (sendData: {
    remember_me: boolean;
    username: string;
    password: string;
  }) => {
    try {
      this.isRememberCredential = sendData.remember_me;
      const { data } = await axios.post<{ data: any }>("/auth/login", {
        username: sendData.username,
        password: sendData.password,
      });
      this.user = data.data;
      const headersToUpdate = {
        Accept: "application/json",
        Authorization: `Bearer ${data.data.authorizationToken}`,
      };
      axios.defaults.headers = Object.assign(
        {},
        axios.defaults.headers,
        headersToUpdate
      );
      localStorage.setItem(
        process.env.REACT_APP_AUTHORIZATION_TOKEN as string,
        data.data.authorizationToken
      );
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  doLogout = () => {
    this.user = null;
    this.clearLocalStorage();
  };

  register = () => {
    console.log(this.user);
  };

  openNotification = (data: {
    title: any;
    message: string;
    type?: string;
    placement?: string;
    action?: any;
  }) => {
    this.notification = {
      title: data.title,
      message: data.message,
      type: data.type ? data.type : "success",
      placement: data.placement ? data.placement : "bottom",
      action: data.action ? data.action : null,
    };
  };

  closeNotication = () => {
    this.notification = null;
  };

  checkPermission = (check: { key: string; value: string }) => {
    if (this.user?.adminType === "admin") {
      return true;
    } else {
      if (this.user?.permission) {
        var status = false;
        Object.entries(this.user.permission).forEach((item: any) => {
          if (item[0] === check?.key) {
            if (item[1][check.value]) {
              status = true;
            } else {
              status = false;
            }
          }
        });
        return status;
      }
    }
  };

  uploadUserPic = async (sendData: any) => {
    try {
      const { data } = await axios.post("/auth/upload-pic", sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  sendNotification = async (sendData: any) => {
    try {
      const { data } = await axios.post("/notification/create", sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default AuthStore;
