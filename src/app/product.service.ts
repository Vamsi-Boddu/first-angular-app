import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/products'); // adjust the URL based on your Spring Boot app's endpoint
  }
  
  
}
