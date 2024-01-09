class ApiConfig {
  private static apiUrl: string = 'http://localhost:3000/api';

  static setApiUrl(url: string): void {
    ApiConfig.apiUrl = url;
  }

  static getApiUrl(): string | undefined {
    return ApiConfig.apiUrl;
  }
}

export default ApiConfig;
