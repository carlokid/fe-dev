import { Component, OnInit } from '@angular/core';
import { ModalInfoService } from '../shared/modal-info/modal-info.service';
import { FactsApiService } from '../facts-api/facts-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayInfoModal: boolean;

  constructor(
    private modalInfo: ModalInfoService,
    private factsApi: FactsApiService
  ) { }

  ngOnInit() {
    this.modalInfo.displayModal$.subscribe(value => {
      this.displayInfoModal = value;
    });
  }

  onDogClick() {
    this.modalInfo.toggleDisplayModal(true);
    this.factsApi.getAnimalFacts('dog').subscribe((resp) => {
      const modalInfo = {
        header: "DOG",
        data: resp
      }
      this.modalInfo.setModalInfo(modalInfo);
    }, error => {
      console.log('onDogClick error', error);
    });    
  }

  onCatClick() {
    this.modalInfo.toggleDisplayModal(true);
    this.factsApi.getAnimalFacts('cat').subscribe((resp) => {
      const modalInfo = {
        header: "CAT",
        data: resp
      }
      this.modalInfo.setModalInfo(modalInfo);
    }, error => {
      console.log('onCatClick error', error);
    }); 
  }

  onHorseClick() {
    this.modalInfo.toggleDisplayModal(true);
    this.factsApi.getAnimalFacts('horse').subscribe((resp) => {
      const modalInfo = {
        header: "HORSE",
        data: resp
      }
      this.modalInfo.setModalInfo(modalInfo);
    }, error => {
      console.log('onHorseClick error', error);
    }); 
  }

  onSnailClick() {
    this.modalInfo.toggleDisplayModal(true);
    this.factsApi.getAnimalFacts('snail').subscribe((resp) => {
      const modalInfo = {
        header: "SNAIL",
        data: resp
      }
      this.modalInfo.setModalInfo(modalInfo);
    }, error => {
      console.log('onSnailClick error', error);
    }); 
  }

}
