import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input()
  public cartFlag: boolean;
  constructor() {
  }

  ngOnInit(): void {
  }
}
