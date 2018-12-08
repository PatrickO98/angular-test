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
  allPeople: Person[];

  constructor(
    private peopleService: PeopleService
   ) { }

   getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(
        data => {
          this.people = data.results;
          this.allPeople = data.results;
          document.getElementById('load').style.display = "none";
        },
        /*people => {
        this.people = people;
        people = Array.from(people);
        document.getElementById('load').style.display = "none";
      },*/
    error => {
      //document.getElementById('error').style.display = "block";
    });
  }

  ngOnInit() {
    this.getPeople();
  }

  filter(event: KeyboardEvent, param: string): void {
    this.people = this.allPeople.filter(e => e.name.includes(param));
  }

}
