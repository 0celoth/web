import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent  implements OnInit {
  @Input() control!: FormControl;
  constructor() { }

  ngOnInit() {}

}
