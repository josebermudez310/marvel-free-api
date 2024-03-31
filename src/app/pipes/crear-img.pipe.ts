import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crearImg'
})
export class CrearImgPipe implements PipeTransform {

  transform(value: string,ext:string): string{
    return value+'.'+ext;
  }

}
