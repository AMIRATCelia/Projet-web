import { News } from './../news';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-actualite',
  templateUrl: './fiche-actualite.component.html',
  styleUrls: ['./fiche-actualite.component.scss']
})
export class FicheActualiteComponent implements OnInit {

  @Input()
  public news: News;
  constructor() {
  }

  ngOnInit() {
  }

}
