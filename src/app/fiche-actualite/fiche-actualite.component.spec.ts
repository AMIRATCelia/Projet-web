import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheActualiteComponent } from './fiche-actualite.component';

describe('FicheActualiteComponent', () => {
  let component: FicheActualiteComponent;
  let fixture: ComponentFixture<FicheActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
