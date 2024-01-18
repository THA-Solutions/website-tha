class ApiConfig {
  private static apiUrl: string = process.env['NX_API_URL'] ? process.env['NX_API_URL'] as string : 'http://localhost:3000/api';

  static getApiUrl(): string | undefined {
    return ApiConfig.apiUrl;
  }
}

export default ApiConfig;
