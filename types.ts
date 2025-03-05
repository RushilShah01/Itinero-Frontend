export interface ILogin{
    email: string,
    password: string
}
export interface IRegister{
    name: string,
    email: string,
    password: string
}
export interface IHistory{
  destination: string;
  endDate: string;
  expense: number;
  expenseType: 'Hotel' | 'Flight' | 'Both';
  purpose: string;
  startDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface IBookTravelForm{
    destination: string,
    startDate: string,
    endDate: string,
    purpose: string,
    expenseType: string,
    expense: number
}

export interface Expense {
    userName: string;      
    totalExpense: number;   
  
  }
  
  export interface DashboardData {
    totalExpense: number;
    totalRequests: number;
    totalAcceptedRequests: number;
    totalPendingRequests: number;
    expenses: Expense[];  // Added expenses array
  }

  export interface Booking {
    id: string;
    employeeName: string;
    destination: string;
    travelDate: string;
    status: string;
  }