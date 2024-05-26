import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes: any[] = [];

  constructor(
    private marvelS: MarvelService,
    private router: Router
  ) { 
    Swal.fire({
      allowOutsideClick: false,
      text: 'Obteniendo personajes',
      icon: 'info'
    });
    Swal.showLoading();
    
    this.marvelS.getPersonajes().subscribe((data:any) => {
      Swal.fire({
        allowOutsideClick: false,
        showConfirmButton: false,
        icon: 'success',
        title: "Personajes obtenidos",
        timer: 1000,
        iconColor: '#25b06a'
      }).then(() => {
        this.personajes=data;
      });
    });
  }

  ngOnInit(): void {
  }

  verPersonaje(id:number) {
     this.router.navigate(['/personaje',id]);
  }

}
