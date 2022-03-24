import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  loading = true;

  constructor(private fb : FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
this.form = this.fb.group({
  User : ['',Validators.required],
  Password : ['',Validators.required] 


  
})

  }

  ngOnInit(): void {
   
  }

  submit() {
   console.log(this.form);
  //  this.router.navigateByUrl('/dashboard');
  const user = this.form.value.User;
  const Password = this.form.value.Password;
  if(user == "test" && Password == "test" ){
    console.log(this.form.value.User);
    console.log(this.form.value.Password);

    this.router.navigateByUrl('/dashboard');
    
  }
  else{
  console.log(this.form.value.User);
  this.error();
  }
  
            }


error(){

  this._snackBar.open('User ou mot de passe invalid','', {horizontalPosition: 'center',
verticalPosition : 'bottom',
duration:5000})
}


  }


