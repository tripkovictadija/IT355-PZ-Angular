import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.scss']
})
export class RegistracijaComponent implements OnInit {

  user: User = {
    id_korisnika:0,    
    ime_korisnika: '',
    prezime_korisnika: '',
    username: '',
    password: '',
  }; 

  constructor(private user_service: UserService, private router: Router) { }


  addUserr(formObj: User){
    this.user_service.addUser(formObj).subscribe((response)=>{
      this.router.navigate(['/login']);
    })

  }

  ngOnInit(): void {
  }

}
