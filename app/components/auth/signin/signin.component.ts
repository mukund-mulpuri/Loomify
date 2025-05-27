import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  isLogin = true;
  email = '';
  password = '';
  name = '';

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      if (this.email && this.password) {
        console.log('Logging in with:', this.email, this.password);
        alert(`Welcome back, ${this.email}!`);
      } else {
        alert('Please enter email and password.');
      }
    } else {
      if (this.name && this.email && this.password) {
        console.log('Registering with:', this.name, this.email, this.password);
        alert(`Account created for ${this.name}!`);
      } else {
        alert('Please fill all fields to register.');
      }
    }
  }
}
