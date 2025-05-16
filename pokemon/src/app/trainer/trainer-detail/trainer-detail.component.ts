import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../../../../trainer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail!: Trainer;
  constructor(private trainersService : TrainerService,
            private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>
    {
      const idRoute = params.get("id");
      console.log("entro al componente de detail");
      if (idRoute)
      {
        this.trainersService.obtenerTrainer(+idRoute).subscribe((trainer)=>
        {
          this.trainerDetail = trainer;
        })
      }
    })
  }
}
