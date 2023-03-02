import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isShowDivIf = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleDisplayDivIf(): void {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
