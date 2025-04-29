import { Inject, inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
@Injectable()
export class BaseHttpService{
  protected http = inject(HttpClient);
  apiUrl = "https://fakestoreapi.com/products"

}