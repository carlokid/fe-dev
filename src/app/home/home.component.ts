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

  onBtnClick(type: string) {
    this.modalInfo.toggleDisplayModal(true);
    this.factsApi.getAnimalFacts(type).subscribe((resp) => {
      const modalInfo = {
        header: type.toUpperCase(),
        data: resp
      }
      this.modalInfo.setModalInfo(modalInfo);
    }, error => {
      console.log('onAnimalClick error', error);
    });    
  }

}
