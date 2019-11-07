import { Component, OnInit } from '@angular/core';
import { ModalInfoService } from '../shared/modal-info/modal-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayInfoModal: boolean;

  constructor(private modalInfo: ModalInfoService) { }

  ngOnInit() {
    this.modalInfo.displayModal$.subscribe(value => {
      this.displayInfoModal = value;
    });
  }

  onDogClick() {
    this.modalInfo.toggleDisplayModal(true);

    const modalInfo = {
      header: "DOG"
    }
    this.modalInfo.setModalInfo(modalInfo);
  }

  onCatClick() {
    this.modalInfo.toggleDisplayModal(true);

    const modalInfo = {
      header: "CAT"
    }
    this.modalInfo.setModalInfo(modalInfo);
  }

  onHorseClick() {
    this.modalInfo.toggleDisplayModal(true);

    const modalInfo = {
      header: "HORSE"
    }
    this.modalInfo.setModalInfo(modalInfo);
  }

  onSnailClick() {
    this.modalInfo.toggleDisplayModal(true);

    const modalInfo = {
      header: "SNAIL"
    }
    this.modalInfo.setModalInfo(modalInfo);
  }

}
