import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-layout',
  template: ` <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0" style="height: 100px">
        <app-header></app-header>
      </div>
      <div class="col-8 p-0" style="height: 600px">
        <app-contents></app-contents>
      </div>
      <div class="col-4 p-0" style="height: 600px">
        <app-side-bar></app-side-bar>
      </div>
      <div class="col-12 p-0" style="height: 100px">
        <app-footer></app-footer>
      </div>
    </div>
  </div>`,
})
export class LayoutExcerciseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
