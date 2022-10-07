import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor() {}

  cardNumber = new BehaviorSubject('');
  cardHolder = new BehaviorSubject('');
  cardExpiryDate = new BehaviorSubject(new Date());

  setCardNumber(cardNumber: string) {
    this.cardNumber.next(cardNumber);
  }

  setCardHolder(holder: string) {
    this.cardHolder.next(holder);
  }

  setCardExpiryDate(date: Date) {
    this.cardExpiryDate.next(date);
  }
}
