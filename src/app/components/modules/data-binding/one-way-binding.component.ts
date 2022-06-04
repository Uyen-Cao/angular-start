import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  template: `<div>
    <hr />
    <h2>One Way Binding</h2>
    <h5>1. Interpolation</h5>
    <p>Title: {{ title }} - Interpolation</p>
    <input class="w-25 form-control" value="{{ title }}" />
    <hr />

    <h5>2. Property Binding</h5>
    <p [innerHTML]="'Title: ' + title + ' - Property Binding'"></p>
    <input class="w-25 form-control" [value]="title" />
    <hr />
    <h5>3. Event Binding</h5>
    <input #inputTitle class="form-control w-25" />
    <button
      class="btn btn-success my-3"
      (click)="changeTitle(inputTitle.value)"
    >
      Change Title
    </button>
    <br />
    <div class="alert alert-danger">
      <p>Lưu ý</p>
      <p>- Trường hợp binding dữ liệu lên innerHTML thì dùng Interpolation</p>
      <p>
        - Trường hợp còn lại trên các thuộc tính của thẻ (hiển thị hình ảnh) thì
        dùng Property Binding
      </p>
      <p>
        - Dữ liệu trên giao diện, thông qua event binding thay đổi thì giao diện
        sẽ tự cập nhật lại các thẻ chứa thuộc tính đó
      </p>
    </div>
  </div>`,
})
export class OneWayBindingComponent implements OnInit {
  //Để binding dữ liệu lên giao diện thì tất cả dữ liệu trên
  //giao diện phải là thuộc tính hoặc phương thức của Model
  title: string = 'Cybersoft';

  constructor() {}

  ngOnInit() {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}

//Mô hình MVVM (model-view-view-model)
