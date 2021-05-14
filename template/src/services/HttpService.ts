import axios, {CancelTokenSource} from 'axios';
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

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => error,
);
axiosInstance.interceptors.request.use(async config => {
  //   config.baseURL = await getBaseUrl();
  config.cancelToken = cancelSource.getSource().token;
  //   config.headers[AUTHORIZATION] = await asyncStorageService.getAccessToken();
  return config;
});

export default class HTTPService {
  static get(url: string, params: any = null): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url, {params: params})
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
        .delete(url, {data: body})
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static finishAll(cancelMessage: string): any {
    cancelSource.cancel(cancelMessage);
    cancelSource.setSource(axios.CancelToken.source());
  }
}
