import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: ` <div style="height: 500px">
    <h2>Two-way Binding</h2>
    <p class="alert alert-warning">
      -Import FormsModule để sử dụng 2waybinding
    </p>
    <h5>Register Form</h5>
    <p>Họ Tên: {{ hoTen }}</p>
    <input class="form-control w-25" [(ngModel)]="hoTen" />
    <br />
    <input
      #iHoTen
      class="form-control w-25"
      (keyup)="handleKeyUp(iHoTen.value)"
    />
    <hr />
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <p>ID</p>
          <input class="form-control" #id [(ngModel)]="prod.id" />
        </div>
        <div class="form-group">
          <p>Name</p>
          <input class="form-control" #name [(ngModel)]="prod.name" />
        </div>
        <div class="form-group">
          <p>Price</p>
          <input class="form-control" #price [(ngModel)]="prod.price" />
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            (click)="handleChangeProduct(id.value, name.value, price.value)"
          >
            Submit
          </button>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img
            [src]="'https://i.pravatar.cc?u=' + prod.id"
            height="250"
            alt="product"
          />
          <div class="card-body">
            <p>Name: {{ prod.name }}</p>
            <p>Price: {{ prod.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class TwoWayBindingComponent implements OnInit {
  hoTen: string = 'Nguyen Van A';

  prod: ProductModel = {
    id: 1,
    name: 'SP1',
    price: 1000,
    img: 'https://picsum.photos/id/15/200/200',
  };
  constructor() {}

  ngOnInit() {}

  handleChangeProduct(id: number | string, name: string, price: string) {
    this.prod.id = id;
    this.prod.name = name;
    this.prod.price = Number(price);
    this.prod.img = `https://picsum.photos/id/${id}/200/200'`;
  }

  handleKeyUp(newHoTen: string) {
    this.hoTen = newHoTen;
  }
}

interface ProductModel {
  id: string | number;
  name: string;
  price: number;
  img: string;
}
