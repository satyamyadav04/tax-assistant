export interface UserIncome {
  salary: number;
  businessIncome: number;
  investmentIncome: number;
  otherIncome: number;
}

export interface Deductions {
  mortgage: number;
  studentLoan: number;
  charitable: number;
  medical: number;
  retirement: number;
}

export interface TaxData {
  income: UserIncome;
  deductions: Deductions;
  year: number;
}

export interface ValidationError {
  field: string;
  message: string;
}