import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForma: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForma = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
  
  logIn() {
    this._http.get<User[]>('http://localhost:8080/user').subscribe(res => {
      const user = res.find((a: User) => {
        return a.username === this.loginForma.value.username && a.password === this.loginForma.value.password
      })

      if (user) {
        alert("Uspesno ste se ulogovali!");
        this.userService.ulogovan = user;
        this.userService.loginUser(user);
        this.loginForma.reset();
        this.router.navigate(['/pocetna'])
        console.log("Ime", this.userService.ulogovan.ime_korisnika)
      } else {
        alert('Korisnik nije pronadjen!')
      }
    }, err => {
      alert('Server side 0')
    }
    )
  }

  logOut(){
    this.userService.ulogovan = {}
  }

  onSubmit() {
    const { username, password } = this.loginForma.value;

    this.userService.getUser(username, password).subscribe((users) => {
      if (users.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        this.router.navigate(['/']);
      } else {
        window.alert('Pogresno korisnicko ime ili lozinka!');
      }
    });
  }
}

