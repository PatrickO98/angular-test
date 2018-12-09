import { Injectable } from '@angular/core';
import { Person } from '../entities/person';
import { People } from '../entities/people';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  // URL to web api
  private swapiUrl = 'https://swapi.co/api/';

  getPeople(): Observable<People> {
    return this.http.get<People>(this.swapiUrl+'people');
  }

  getPerson(pUrl: string): Observable<Person> {
    const url = `${pUrl}`;
    return this.http.get<Person>(url);
  }
}
