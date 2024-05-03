import { Component } from '@angular/core';
import { UpdateUser } from '../../Interfaces/update-request';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  myId!: number;
  user: UpdateUser = {
    fullName: "",
    email: "",
    status: "",
    age: 0
  };

  setValue: UpdateUser = {
    fullName: "",
    email: "",
    status: "",
    age: 0
  };

  constructor(private http : AuthService, private router: Router){
    this.getById();
  }

  ngOnInit(): void {

    this.getById();

  }

  getById(){
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  setUser(){
    this.http.update(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
