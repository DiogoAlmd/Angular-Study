import { Component, OnInit } from '@angular/core';
import employees from '../showlist';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  
  //employees = employees;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

}
