import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-out',
  templateUrl: 'check-out.component.html',
  styleUrls: ['check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public checkoutForm: FormGroup;
  constructor() {

  }

  ngOnInit(): void {
    this.createCheckoutForm();
  }

  createCheckoutForm() {
    this.checkoutForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      expMonth: new FormControl('', Validators.required),
      expYear: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required)
    });
  }

  submitCheckoutFormDetails() {
    console.log("Checkout Form Details: ", this.checkoutForm.value);
  }
}
