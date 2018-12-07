import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../entities/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[];

  constructor(
    private peopleService: PeopleService
   ) { }

   getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(people => {
        this.people = people;
        document.getElementById('load').style.display = "none";
      },
    error => {
      document.getElementById('error').style.display = "block";
    });
  }

  ngOnInit() {
    this.getPeople();
  }

}
