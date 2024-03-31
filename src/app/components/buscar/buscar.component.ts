import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  personajesProv: any[] = [];
  personajes: any[] = [];

  constructor(
    private marvelS:MarvelService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.marvelS.getPersonajes().subscribe((data:any) => {
      console.log(data);
      this.personajesProv=data;
      console.log(this.personajesProv);
    });
  }

  buscarPersonaje(termino:string) {
      this.personajes=[];
      termino=termino.toLowerCase();
      if (termino.length>0){
        for(let i=0; i< this.personajesProv.length; i++)
        {
          let personaje=this.personajesProv[i];
          let nombre = personaje.name.toLowerCase();

          if (nombre.indexOf(termino)>=0)
          {
            this.personajes.push(personaje);
          }
        }
      }      
      console.log(this.personajes);
    }

  verPersonaje(id:number) {
     this.router.navigate(['/personaje',id]);
  }

}
