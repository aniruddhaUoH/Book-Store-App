import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class BookStoreService {
  private checkoutFlag = false;
  public booksDetails: any[];

  constructor(private http: HttpClient) {
    this.init();
  }

  private init() {

  }

  public getBooksDetails(): Observable<any> {
    return this.http.get("/api/books");
  }

  public setBooksDetails(booksDetails: any) {
    this.booksDetails = booksDetails;
  }

  public getSettedBooksDetails() {
    return this.booksDetails;
  }

  public setCheckoutFlag(checkoutFlag) {
    this.checkoutFlag = checkoutFlag;
  }

  public getCheckoutFlag() {
    return this.checkoutFlag;
  }
}
