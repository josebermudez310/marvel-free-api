import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date = new Date();
  year: number;

  constructor() {
    this.year = this.date.getFullYear();
  }

  ngOnInit(): void {
  }

}
