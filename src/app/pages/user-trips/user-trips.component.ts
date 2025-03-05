import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user-trips',
  imports: [NgFor, FormsModule, NgIf, DatePipe],
  templateUrl: './user-trips.component.html',
  styleUrl: './user-trips.component.css'
})
export class UserTripsComponent implements OnInit {
  usersrv=inject(UserService)
  travelHistory:any[]=[]
  destination:string=""
  startDate:string=""
  endDate:string=""
  expenseType:string=""
  expense:number=0
  status:string=""



  ngOnInit(): void {
   this.usersrv.fetchTravelHistory().subscribe({
    next:(res:any)=>{
      this.travelHistory=res,
      this.destination=res.destination,
      this.startDate=res.startDate,
      this.endDate=res.endDate,
      this.expenseType=res.expenseType,
      this.expense=res.expense,
      this.status=res.status
    },
    error:(err)=>{
      console.log("Api Error: ",err);
    }
   })   
  }
}
