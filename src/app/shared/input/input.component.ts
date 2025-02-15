import { Component, Input, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @ContentChild(NgModel) model:NgModel;
  @Input() errorMassage: string;
  @Input() label:string;
  input: any;

  

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean {
   return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}


