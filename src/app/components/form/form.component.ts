import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  // creacion array para almacenar items
  items: any = []

  ngOnInit(): void {

  }
  // funcion para agregar items al array
  add(item: HTMLInputElement) {
    this.items.push(item.value);
  }

}
