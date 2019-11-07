import { Component, OnInit } from '@angular/core';
import { ModalInfoService } from './modal-info.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {

  header: string;
  data: any;

  constructor(private modalInfo: ModalInfoService) { }

  ngOnInit() {
    this.modalInfo.modalInfo$.subscribe((value: any) => {
      this.header = value.header;
    });
  }

  closeModal() {
    this.modalInfo.toggleDisplayModal(false);
  }

}
