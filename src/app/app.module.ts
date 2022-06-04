import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutExcerciseModule } from './components/LayoutExcercise/layout-excercise.module';
import { DataBindingModule } from './components/modules/data-binding/data-binding.module';

@NgModule({
  //Declarations: where to declare for every new components
  declarations: [AppComponent, DemoComponent],
  //Imports: where to import other modules, or libraries used for the application
  imports: [BrowserModule, LayoutExcerciseModule, DataBindingModule],
  //Service: where to declare service
  providers: [],
  //Bootstrap: where to declare components to be used in index.html file
  bootstrap: [AppComponent],
})
export class AppModule {}
