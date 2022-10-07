import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private cardService: CardService) {}

  cardNumber!: string;
  cardHolder!: string;
  expiryDate!: Date;

  updateForm() {
    this.cardService.setCardNumber(this.cardNumber);

    this.cardService.setCardHolder(this.cardHolder);

    this.cardService.setCardExpiryDate(this.expiryDate);
  }

  handleSubmit() {
    this.cardNumber = this.cardNumber = '';

    this.expiryDate = new Date();
  }

  ngOnInit(): void {}
}
