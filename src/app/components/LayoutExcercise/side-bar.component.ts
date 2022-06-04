import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  template: `<section class="side-bar bg-danger h-100">
    <h1>Side Bar</h1>
  </section>`,
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
