import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UsersProvider {
  private API_URL = 'http://localhost:80/pocUlm/public/index.php/api/'
 
  constructor(public http: Http) { }
 
  addContacto(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.API_URL + type, credentials, {headers: headers})
        .subscribe(res => {
          resolve(res.json);
        }, (err) => {
          reject(err);
        });
    });

  
    }
  
 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };
     
      console.log(data);
      this.http.post(this.API_URL + 'clientes', data)
        .subscribe((result: any) => {
          resolve(result);
          console.log(result);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  getAll(page: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'users/?per_page=10&page=' + page;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'contactos/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  insert(contacto: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'contactos/';
 
      this.http.post(url, contacto)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  update(contacto: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + contacto.id;
      let data = {
        "first_name": contacto.first_name,
        "last_name": contacto.last_name
      }
 
      this.http.put(url, contacto)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'contactos/' + id;
 
      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}