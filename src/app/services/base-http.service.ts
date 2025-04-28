import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class BaseHttpService{
  http = Inject(HttpClient);
  apiUrl = "fake"
}