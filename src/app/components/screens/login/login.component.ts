import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{
    this.http.get<any>('http://localhost:3000/signUpUsers')
    .subscribe((result) => {
      const user = result.find((ans: any) => {
        return (ans.email === this.loginForm.value.email && ans.password === this.loginForm.value.password);
      });
      if (user) {
        alert('Utilisateur connecté');
        this.loginForm.reset();
        this.router.navigateByUrl('myAccount');
      } else {
        alert('Identifiant incorrecte');
      }
    });
  }

}
