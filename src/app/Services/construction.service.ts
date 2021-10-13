import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor() { }


  getPlans()
  {
   const arr = [
    {image: "/././assets/houseplans/1.jpeg "},
    {image: "/././assets/houseplans/2.jpeg "},
    {image: "/././assets/houseplans/3.jpeg " },
    {image: "/././assets/houseplans/4.jpeg" },
];
return arr;
  }


  
}
