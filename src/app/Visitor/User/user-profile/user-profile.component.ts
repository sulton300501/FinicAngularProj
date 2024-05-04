import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector('.js-message-btn');
    const card = document.querySelector('.js-profile-card');

    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      card?.classList.add('active');
    });

    const closeBtns = document.querySelectorAll('.js-message-close');
    closeBtns?.forEach((element) => {
      element?.addEventListener('click', (e) => {
        e.preventDefault();
        card?.classList.remove('active');
      });
    });
  }

}