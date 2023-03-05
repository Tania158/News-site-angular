import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | any;

  errorMessage: string;

  constructor() { }
  
  ngOnInit(): void {
    if (this.backendErrorsProps) {
      this.errorMessage = this.backendErrorsProps.message;
    }

    if (this.backendErrorsProps.message == null) {
      this.errorMessage = 'Something went wrong... Please, try again later.';
    }
  }

}
