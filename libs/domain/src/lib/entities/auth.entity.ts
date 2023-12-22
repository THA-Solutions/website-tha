export interface Auth {
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
  redirect: string;
  csrfToken: string;
  callBackUrl: string;
  json: boolean;
}
