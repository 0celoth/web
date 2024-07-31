import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  constructor() { }

  ngOnInit() {}

}
