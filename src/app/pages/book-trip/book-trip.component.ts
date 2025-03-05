import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-book-trip',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './book-trip.component.html',
  styleUrl: './book-trip.component.css'
})
export class BookTripComponent {

  usersrv=inject(UserService)  

  travelForm:FormGroup=new FormGroup({
    destination:new FormControl(),
    startDate:new FormControl(),
    endDate:new FormControl(),
    purpose:new FormControl(),
    expenseType: new FormControl(),
    expense: new FormControl()
  })

  bookTrip() {
    this.travelForm.disable()
    this.usersrv.bookTrip(this.travelForm.value).subscribe({
      next:(res)=>{
        this.travelForm.reset()
        this.travelForm.enable()  
      },
      error:(err)=>{
        console.log("Api Error: ",err);
        this.travelForm.enable()
      }
    })
  }
}
