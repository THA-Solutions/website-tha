class ApiConfig {
  private static apiUrl = process.env['API_URL'];

  static setApiUrl(url: string): void {
    ApiConfig.apiUrl = url;
  }

  static getApiUrl(): string | undefined {
    return ApiConfig.apiUrl;
  }
}

export default ApiConfig;
