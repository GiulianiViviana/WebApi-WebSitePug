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
  prodotto:Products[];
  private BASE_URL:string = '/products';

  constructor(private http: HttpClient) {}

     ngOnInit(): void {

      this.http.get('https://3000-f3624264-e3b4-46ce-bc26-c9e4139daf7c.ws-eu0.gitpod.io/api/products').subscribe(data => {
        this.prodotto = data['products'];
      });
    }

}
