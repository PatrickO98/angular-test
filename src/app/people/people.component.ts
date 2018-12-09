import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ImageService } from '../services/image.service';
import { Person } from '../entities/person';
import { Image } from '../entities/image';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[];
  allPeople: Person[];
  images: Image[];

  constructor(
    private peopleService: PeopleService,
    private imageService: ImageService
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

  getImages(name: string, target: string): void {
    this.openModal(target);
    this.imageService.getImages(name)
      .subscribe(
        data => {
          this.images = data.value;
        }
      )
  }

  ngOnInit() {
    this.getPeople();
  }

  filter(event: KeyboardEvent, param: string): void {
    this.people = this.allPeople.filter(e => e.name.includes(param));
  }

  openModal(target): void {
    event.preventDefault();
    var fTarget = target.split("#");
    document.getElementById(fTarget[0]).style.display = "block";
  }

  closeModal(target): void {
    var fTarget = target.split("#");
    document.getElementById(fTarget[0]).style.display = "none";
  }

}
