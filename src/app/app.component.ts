import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myZoo';

  constructor(public page: PagingService){}

 
}
