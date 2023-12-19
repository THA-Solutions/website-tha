export interface Company {
  id: string;
  cnpj: number;
  legalName: string;

  cep: number;
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  city: string;
  state: string;

  image?: string;
  tradeName?: string;
  description?: string;
}
