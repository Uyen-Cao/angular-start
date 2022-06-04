import { NgModule } from '@angular/core';
//Common module là thư viện hỗ trợ các cú pháp binding, directive
import { CommonModule } from '@angular/common';
//Import FormsModule để sử dụng 2waybinding
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { OneWayBindingComponent } from './one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent],
  providers: [],
})
export class DataBindingModule {}
