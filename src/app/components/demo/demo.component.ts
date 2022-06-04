import { Component, OnInit } from '@angular/core';

@Component({
  //decorator
  selector: 'app-demo',
  // templateUrl: 'demo.component.html'
  template: `<div>Demo Content</div>`,
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
