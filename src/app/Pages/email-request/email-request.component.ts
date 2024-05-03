import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for displaying messages
import { Observable } from 'rxjs'; // Import Observable
import { Email } from '../../Interfaces/email'; // Import Email interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-request',
  templateUrl: './email-request.component.html',
  styleUrls: ['./email-request.component.scss']
})
export class EmailRequestComponent implements OnInit {
  myemail: string = '';

  constructor(private http: AuthService, private matSnackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  sendEmail(): void {
    console.log('submitted')
    if (!this.myemail) {
      this.matSnackBar.open('Please enter your email!', 'Close', {
        duration: 5000,
        horizontalPosition: 'center'
      });
    }

    this.http.sendEmail(this.myemail).subscribe({
      next: (data: Email) => {
      console.log('submitted')
        this.matSnackBar.open('Your PIN code has been sent to your email!', 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        });
        this.router.navigate(['/reset']);

      },
      error: (err) => {
        console.log(err);
        this.matSnackBar.open(err.error.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      }
    });
  }
}
