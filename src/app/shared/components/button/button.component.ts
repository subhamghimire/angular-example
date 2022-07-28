import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public buttonText = '';

  color: string = '';

  showButton = true;

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }

  @Input()
  set type(typeName: buttonTypes) {
    this.color = 'bg-' + typeName;
  }
}

type buttonTypes = 'primary' | 'secondary' | 'ternary';
