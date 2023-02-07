import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedRequestData: any = null;

  selectRequest($event) {
    console.log("event ", $event);
    this.selectedRequestData = $event;
  }

}
