import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header class="bg-dark h-100">
    <h2>Header</h2>
  </header> `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
