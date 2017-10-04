import { Directive, Input, OnInit, OnChanges, SimpleChanges, AfterContentInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-tri-visuel]'
})
export class TriVisuelDirective implements OnInit, OnChanges, AfterContentInit {


  @Input("tri-visuel-colonne")
  currentColonne: string;

  @Input("tri-visuel-direction")
  direction: boolean;

  @Input("app-tri-visuel")
  colonne: string;

  @HostBinding("class")  //attribut class de la balise parent
  currentClass: string;

  constructor() { 

  }


  ngOnInit(): void {
    console.log(`colonne = ${this.colonne}`);
    console.log(`current colonne = ${this.currentColonne}`);
    console.log(`direction = ${this.direction}`);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if(typeof(changes['currentColonne']) == 'undefined' && changes['direction']) {

      if(this.currentColonne == this.colonne){
        let icon = (changes['direction'].currentValue) ? "glyphicon glyphicon-arrow-down"
            : "glyphicon glyphicon-arrow-up";

          this.currentClass = "btn btn-primary " + icon;
      }
    }

    else if(changes['currentColonne'].currentValue != this.colonne){
      this.currentClass = "btn btn-default"
    }
    else {
      this.currentClass = "btn btn-primary glyphicon glyphicon-arrow-down"
    }
  }

    ngAfterContentInit(): void {
    console.log(`ci: ${this.colonne} - ${this.currentColonne} - ${this.direction}`);
    
  }
}
