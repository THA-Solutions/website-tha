class ApiConfig {
  private static apiUrl: string = process.env.API_URL ? process.env.API_URL as string : 'http://localhost:3000/api';

  static getApiUrl(): string | undefined {
    return ApiConfig.apiUrl;
  }
}

export default ApiConfig;
