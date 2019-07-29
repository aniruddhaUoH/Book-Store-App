import {Component, OnInit} from '@angular/core';
import {BookStoreService} from "../services/book-store.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html'
})
export class BookStoreComponent implements OnInit {

  public booksDetails: any[];
  public cartItems = [];
  p: number = 1;
  public searchForm: FormGroup;
  public loadingFlag = true;
  public searchText = '';

  constructor(private bookStoreService: BookStoreService,
              private router: Router) {

  }

  ngOnInit() {
    this.bookStoreService.getBooksDetails().subscribe(data => {
      this.booksDetails = data;
      this.bookStoreService.setBooksDetails(this.booksDetails);
    });
    this.createSearchForm();
    this.loadingFlag = false;
  }

  addToCart(book) {
    this.cartItems.push(book);
    console.log("cart items: ", this.cartItems);
  }

  sortByPrice() {
    this.booksDetails = this.booksDetails.sort(function(a, b){
      return a.price-b.price;
    })
  }

  sortByRatings() {
    this.booksDetails = this.booksDetails.sort(function(a, b){
      return a.average_rating-b.average_rating;
    })
  }

  sortByAuthors() {
    this.booksDetails = this.booksDetails.sort(function(a, b){
      const nameA = a.authors.toLowerCase(), nameB = b.authors.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0
    })
  }

  createSearchForm() {
    this.searchForm = new FormGroup({
      searchText: new FormControl('', Validators.required)
    });
  }

  searchBooks() {
    this.searchText = this.searchForm.controls['searchText'].value;
    this.booksDetails = this.bookStoreService.getSettedBooksDetails().filter(b => {
      let searchTitleAuthor = b.authors + b.title;
      return searchTitleAuthor.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) > -1
    });
  }

  proceedToCheckout() {
    this.bookStoreService.setCheckoutFlag(true);
    this.router.navigate(['/check-out']);
  }
}
