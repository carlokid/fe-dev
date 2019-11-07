import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {

  // for displaying modal
  private displayModal = new Subject<boolean>();
  public displayModal$ = this.displayModal.asObservable();

  // for displaying message box data
  private modalInfo = new Subject<string>();
  public modalInfo$ = this.modalInfo.asObservable();

  constructor() { }

  public toggleDisplayModal(value: boolean) {
    this.displayModal.next(value);
  }

  public setModalInfo(value: any) {
    this.modalInfo.next(value);
  }

}
