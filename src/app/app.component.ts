import { Component } from '@angular/core';

/**
 * návrh objektu úkolu
 */
interface IUkol {
  ukol: string;
  hotovo: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public novyUkol: string;
  public ukoly: Array<IUkol>;
  private objUkol: IUkol;

  constructor() {
    this.novyUkol = '';
    this.ukoly = [];
  }

  /**
   * přidáme úkol do seznamu a zabraníme další propagaci eventu
   */
  public pridatUkol(event: Event): void {
    this.objUkol = {
      ukol: this.novyUkol,
      hotovo: false
    }

    this.ukoly.push(this.objUkol);
    this.novyUkol = '';

    event.preventDefault();
  }

  /**
   * smazaní úlohy na indexu (klik na X u úlohy)
   */
  public smazatUkol(index: number): void {
    this.ukoly.splice(index, 1);
  }

  /**
   * smažeme vsechny hotové úlohy
   * od konce pole kvůli funkcionalitě .splice
   */
  public smazatHotove(): void {
    // revesrse loop needed
    for(let i=(this.ukoly.length-1); i > -1; i--) {
      if(this.ukoly[i].hotovo) {
        this.ukoly.splice(i, 1);
      }
    }
  }
}