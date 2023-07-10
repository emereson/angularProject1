import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data: any[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.peopleService.peopleData().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
