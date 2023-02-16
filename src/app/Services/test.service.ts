import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  testCaseApi(body: any): Observable<any> {
    const apiUrl = environment.baseAPIURL + '/saveTestCase';
    return this.http.post<any>(apiUrl, body);
  }

  getAllCollections() {
    const apiUrl = environment.baseAPIURL + '/api/collection/getAllColletions';
    return this.http.get<any>(apiUrl);
  }

  
  getAllLogs() {
    const apiUrl = environment.baseAPIURL + '/getAllResult';
    return this.http.get<any>(apiUrl);
  }
  
  saveCollections(body: any): Observable<any> {
    const apiUrl = environment.baseAPIURL + '/api/collection/saveColletions';
    return this.http.post<any>(apiUrl, body);
  }

  saveRequestData(body: any): Observable<any> {
    const apiUrl = environment.baseAPIURL + '/api/requestdata/saveRequestData';
    return this.http.post<any>(apiUrl, body);
  }
  // deleteRecord(request):Observable<any>{
  //   const apiUrl = environment.baseAPIURL + '/api/requestdata/deleteRequestData';
  //   console.log("service :",request)
  //   return this.http.delete<any>(apiUrl);
  // }

  getAllUsers(): Observable<any> {
    const apiUrl = 'http://10.11.0.13:8080/demoCRUD-0.0.1-SNAPSHOT/user/getAll';
    return this.http.get<any>(apiUrl);
  }
  
}
