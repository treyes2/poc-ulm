import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable()
export class ProfileServiceProvider {

  apiUrl = 'https://168.128.13.18/cas/oidc/profile';

  constructor(public httpClient: HttpClient, ) {
    console.log('Hello ProfileServiceProvider Provider');
  }

  getProfile(access: string) {
    //inicio profile
    const headers = new HttpHeaders({
        responseType: 'json',
        Authorization: 'Bearer ' + access
    });

    // The response is already mapped to the body, so you have no access to the headers here.
    // return this.httpClient.get(this.apiUrl, { headers })
    // .do((res: Response)=>console.log("service : "+res.json))
    // .map((res: Response) =>res.json);

    // With observe, you can request the full responseObject. It has the properties body and headers.
    // This time you can read out the headers, but these are from the response from your server, not from your request.
    // To check the headers from your request, you have to use the browser dev tools or read the headers out in your server.
    return  this.httpClient.get(this.apiUrl ,{ headers })
    ;
   


    //fin inicio profile
  }



}
