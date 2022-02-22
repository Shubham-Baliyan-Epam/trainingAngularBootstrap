import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  designation: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _users = new BehaviorSubject<User[]>([]);
  private baseUrl = 'https://server.transcoders.run/users';
  private dataStore: { users: User[] } = { users: [] };
  readonly users = this._users.asObservable();
  getUsers() {
    this.http.get<User[]>(`${this.baseUrl}`).subscribe(
      (data) => {
        this.dataStore.users = data;

        this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => console.log('Could not load Users.')
    );
  }
  deleteUser(id: number) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(
      (data) => {
        // this.dataStore.users = data;
        console.log('deleted ', data);
        this.getUsers();
        // <this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => console.log('Could not load Users.')
    );
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
  updateUser(data: User) {
    this.http.put<User>(`${this.baseUrl}/${data.id}`, data).subscribe(
      (data) => {
        console.log('update', data);
        this.getUsers();
        // this.dataStore.users.forEach((t, i) => {
        //   if (t.id === data.id) {
        //     this.dataStore.users[i] = data;
        //   }
        // });

        // this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => console.log('Could not update User.')
    );
  }
  createUser(data: User) {
    let headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(data);
    this.http.post<User>(this.baseUrl, body, { headers }).subscribe(
      (data) => {
        console.log(data);
        this.getUsers();
      },
      (error) => console.log('Could not create User.')
    );
  }
}
