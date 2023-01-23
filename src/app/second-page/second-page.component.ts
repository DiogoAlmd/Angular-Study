import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

    target:any = {};

    formulario!: FormGroup;
    
    employee: Employee = {
    name: '',
    idade: '',
    email: '',
    endereco: '',
    telefone: '',
  }

  //employees:any[] = employees;

  constructor(private employeeService: EmployeeService) {   }

  ngOnInit(): void {
  }

  addEmployee(event: any) {
    const copy = Object.assign( this.target, this.employee)
    this.employeeService.addEmployee(copy);
  }
}

export class NameEditorComponent {
  name = new FormControl('');
}
