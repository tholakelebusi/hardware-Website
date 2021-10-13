import { Component, OnInit } from '@angular/core';
import { ConstructionService } from 'src/app/Services/construction.service';

@Component({
  selector: 'app-houseplan',
  templateUrl: './houseplan.component.html',
  styleUrls: ['./houseplan.component.scss']
})
export class HouseplanComponent implements OnInit {

  constructor(private constService:ConstructionService) { }
plans:any;
  ngOnInit(): void {
    this.plans=this.constService.getPlans();

    console.log(this.plans);
  }

}
