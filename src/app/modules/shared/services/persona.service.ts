import { Injectable } from '@angular/core';
import {baseUrl} from "../../../constantes"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  getPersonas(){
    const endpoint = `${baseUrl}/persnas`;
    return this.http.get(endpoint)
 }

 savePersonas(body:any){
  const endpoint = `${baseUrl}/personas`;
  return this.http.post(endpoint,body);
 }
}
