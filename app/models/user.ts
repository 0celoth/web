export interface Company {
    cif: string;
    createdDate: string;
    logo: string;
    name: string;
    url: string;
  }
export interface User {
    createdDate: string;
    name: string;
    endedDate: string;
    surname: string;
    email: string;
    occupation: string;
    password: string;
    phone: string;
    verified: boolean | null;
    company: Company;
}
