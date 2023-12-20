export interface Company {
  id: string;
  cnpj: number;
  legal_name: string;

  cep: number;
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  city: string;
  state: string;

  image?: string;
  trade_name?: string;
  description?: string;
}
