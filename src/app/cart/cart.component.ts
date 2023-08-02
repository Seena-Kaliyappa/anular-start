import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartItems = this.cartService.clearItems();
    window.alert('Your order has been submitted ' + this.checkoutForm.value.name);
    this.checkoutForm.reset();
  }
}
