import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: ` <div class="container">
    <h1>Data Binding</h1>
    <app-one-way></app-one-way>
    <hr />
    <app-two-way></app-two-way>
  </div>`,
})
export class DataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
