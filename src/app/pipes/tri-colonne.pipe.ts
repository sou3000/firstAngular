import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triColonne'
})
export class TriColonnePipe implements PipeTransform {

  //value: donné à transformer
  //args, données optionnelles
  //any type de sortie
  transform(value: any[], colonne?: string, direction?: boolean): any[] {

    if(!Array.isArray(value)){   //ce n'est pas un tableau => on renvoit la meme valeur
      return value;
    }

    colonne = colonne || "id";
    direction = direction || false;

    return value.sort((a, b) => {
      let facteur = direction? 1: -1;
      if(a[colonne] > b[colonne]) return 1* facteur;
       if(a[colonne] < b[colonne]) return -1* facteur;
       return 0;
    });
  }

}
