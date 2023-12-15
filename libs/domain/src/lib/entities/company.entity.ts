export interface Company {
  id: string;
  image: string;
  cnpj: string;
  legal_name: string;
  trade_name?: string;
  email: string;
  phone?: string;
  description?: string;
}
