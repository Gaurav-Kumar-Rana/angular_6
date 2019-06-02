import { Component } from '@angular/core';

@Component({
  selector: 'app-myfirstcomp',
  templateUrl: './myfirstcomp.component.html',
  styleUrls: ['./myfirstcomp.component.css']
})
export class MyfirstcompComponent {
  myFirstComponent = 'List Of Images';
  prodList = {
      Apple: false,
      Apricot: false,
      Asian_Persimmon: false,
      Avocado: false,
      Wood_Apple: false,
      banana: false,
      Black_Barry: false,
      Blue_Barry: false
  };
  tempSelectedProd = '';
  selectedProds = [];
  tempSelectedProdDesc = '';
  selectProductByClick = (prod) => {
      this.tempSelectedProd = prod;
  }
  deleteSelectedProductByClick = () => {
    this.tempSelectedProd = '';
  }
  resetProdSelection = () => {
    this.tempSelectedProd = '';
  }
  saveProdSelection = () => {
    let _data = {product: this.tempSelectedProd, description: this.tempSelectedProdDesc};
    this.selectedProds.push(_data);
    this.tempSelectedProd = '';
    this.tempSelectedProdDesc = '';
  }
}
