import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  idade: any;
  email: string;
  endereco: string;
  telefone: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  
  
  constructor() { }

  addEmployee(employee: Employee){
    this.employees.push(employee);
  }
}

  
