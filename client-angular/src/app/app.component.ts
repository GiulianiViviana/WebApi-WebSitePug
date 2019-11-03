import { Component } from '@angular/core';
import { Products } from './products';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products';
  products:Products[];
  private BASE_URL:string = '/api';

  constructor(private http: HttpClient) {}

      getProdotti(): void {
      this.http.get<Products[]>('https://3000-e93a3747-c691-47ec-bea4-3bea982d8e89.ws-eu0.gitpod.io/products').subscribe(data => {
        this.products = data;
      });

    }

}
