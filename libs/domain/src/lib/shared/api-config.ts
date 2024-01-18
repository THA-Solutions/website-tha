class ApiConfig {
  private static apiUrl: string = process.env["API_URL"] as string

  static setApiUrl(url: string): void {
    ApiConfig.apiUrl = url;
  }

  static getApiUrl(): string | undefined {
    return ApiConfig.apiUrl;
  }
}

export default ApiConfig;
