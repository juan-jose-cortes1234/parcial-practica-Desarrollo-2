import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
import { TrainerService } from '../../../../trainer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;
  constructor(private trainerService : TrainerService,
            private router : Router
  ) {}

  getTraunersList(): Observable<Trainer[]> {
    return this.trainerService.obtenerTrainers();
    ;
  }

  ngOnInit() {
    
   this.getTraunersList().subscribe((list)=>{
    this.trainers = list;
    console.log(list);
   });
  }

  onSelected(trainer: Trainer) {
    this.router.navigate(["/trainers",trainer.id])
  }
}
