import axios, { CancelTokenSource } from 'axios';
import { getAccessToken } from './storage.service';
class CancelToken {
  source: any;
  constructor(initialValue: CancelTokenSource) {
    this.source = initialValue;
  }
  getSource(): CancelTokenSource {
    return this.source;
  }
  setSource(value: CancelTokenSource) {
    this.source = value;
  }
  cancel(cancelMessage = '') {
    this.source.cancel(cancelMessage);
  }
}

const cancelSource = new CancelToken(axios.CancelToken.source());

const AUTHORIZATION = 'AUTHORIZATION';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

// For Request Interceptor
axiosInstance.interceptors.request.use(config => {
  config.cancelToken = cancelSource.getSource().token;
  if (config.headers) {
    config.headers[AUTHORIZATION] = getAccessToken();
  }
  return config;
});

// For Response Interceptor
axiosInstance.interceptors.response.use(
  response => response.data,
  error => error,
);
export default class HTTPService {
  static get(url: string, params: any = null): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url, { params: params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static put(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put(url, body)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static post(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(url, body)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static delete(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url, { data: body })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static finishAll(cancelMessage: string): any {
    cancelSource.cancel(cancelMessage);
    cancelSource.setSource(axios.CancelToken.source());
  }
}
