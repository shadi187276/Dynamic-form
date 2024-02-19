import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model';
import { APP_CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = APP_CONSTANTS.API_BASE_URL;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product`);
  }
  updateProduct(paylod: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/product/${paylod.id}`,paylod);
  }
  addProduct(paylod: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product`,paylod);
  }
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/product/${id}`);
  }
}
