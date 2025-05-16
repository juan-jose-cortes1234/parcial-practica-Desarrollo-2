import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from './src/app/trainer/Trainer';
import { baseUrl } from './src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

constructor(private http : HttpClient) { }

public obtenerTrainers() : Observable<Trainer[]>
{
  console.log("obteniendo trainers");
  return this.http.get<Trainer[]>(baseUrl);
}

public obtenerTrainer(id : number) : Observable<Trainer>
{

  return this.http.get<Trainer>('https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/'+id+'/trainers.json');
}

}
