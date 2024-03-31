import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id: string = '';
  load: boolean = false;
  info: any;

  constructor(
    private routerA: ActivatedRoute,
    private router: Router,
    private marvelS: MarvelService
  ) { 
    this.routerA.params.subscribe(params=>{
      this.id=params['id']
      this.getInfor(params['url']);
    })
  }

  ngOnInit(): void {
  }

  getInfor(url:string) {
    this.marvelS.getInfo(url).subscribe(resp=>{
      
      if (resp.description)
      {
        this.info=resp;
      }else
      {
        resp.description='No tiene descripción';
        this.info=resp;
      }
      
      this.load=true;    
      
    });
  }

  regresar() {
    this.router.navigate(['personaje',this.id])
  }

}
