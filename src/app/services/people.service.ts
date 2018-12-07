import { Injectable } from '@angular/core';
import { Person } from '../entities/person';
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

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.swapiUrl+'people');
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.swapiUrl}people/${id}`;
    return this.http.get<Person>(url);
  }
}
