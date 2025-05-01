import { requestSWR, requestSWRMutation } from "@/axiosSwr/swr/useRequest";
import {
  apiUpdateUser,
  apiUserDetail,
  apiUserInfo,
  UserInfo,
} from "@/modules/common";

export const useGetUserDetail = (params?: any) => {
  return requestSWR<UserInfo>("/user/detail", () => apiUserDetail(params));
};

export const useGetUserInfo = (params?: any) => {
  return requestSWR<UserInfo>("/user/detail", () => apiUserInfo(params), {
    revalidateOnFocus: false, //页面聚焦不重新请求
    errorRetryCount: 0, //禁止自动重试
  });
};
export const useUpdateUser = () => {
  return requestSWRMutation(
    "useUpdateUser",
    (_url, { arg }) => apiUpdateUser(arg),
    {
      errorRetryCount: 0,
      revalidateOnMount: false,
    }
  );
};
