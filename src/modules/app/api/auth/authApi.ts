import { postDeviceId } from '@modules/app/interface/auth';
import axiosClient from '../axiosClient';

const authApi = {
    login(data: any) {
        const url = '/auth/token';
        return axiosClient.post(url, data);
    },
    register(data: any) {
        const url = '/auth/register';
        return axiosClient.post(url, data);
    },
    refreshToken(data: any) {
        const url = '/auth/refresh-token';
        return axiosClient.post(url, data);
    },
    logout() {
        const url = '/auth/logout';
        return axiosClient.post(url);
    },
    requestOtpCode(data: any) {
        const url= "/auth/request-code"
        return axiosClient.post(url, data)
    },
    forgetPassword(data: any) {
        const url= "/auth/forgot-password"
        return axiosClient.post(url, data)
    },
    postDeviceId(data: postDeviceId) {
        const url= "/api/v1/watermark/deviceId"
        return axiosClient.post(url, data)
    }
};

export default authApi; 