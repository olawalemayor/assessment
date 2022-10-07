import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { of, takeUntil } from 'rxjs';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // Form controls
  cardNumber = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
  ]);

  cardHolder = new FormControl('', [
    Validators.required,
    Validators.min(3),
    Validators.pattern('[a-zA-Z]*'),
  ]);

  expDate = new FormControl(new Date(), Validators.required);

  cvv = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
  ]);

  subs = of();

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.cardNumber
      .pipe(takeUntil(this.subs))
      .subscribe((val) => this.cardNumber.setValue(val));

    this.cardService.cardHolder
      .pipe(takeUntil(this.subs))
      .subscribe((val) => this.cardHolder.setValue(val));

    this.cardService.cardExpiryDate
      .pipe(takeUntil(this.subs))
      .subscribe((val) => this.expDate.setValue(val));
  }
}
