import { Component } from '@angular/core';

@Component({
  //Tag name
  selector: 'app-root',
  //selector: '.app-root'
  //selector: '[app-root]'
  //selector thay vì tag-name
  //Link to file
  //templateUrl: './app.component.html',
  template: ` <div>
    <!-- <app-ex-layout></app-ex-layout> -->
    <app-data-binding></app-data-binding>
  </div>`,
  //Link to scss file
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Where to handle typescript for template above
  title = 'angular-start-project';
}
