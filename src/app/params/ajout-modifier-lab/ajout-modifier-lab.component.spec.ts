import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifierLabComponent } from './ajout-modifier-lab.component';

describe('AjoutModifierLabComponent', () => {
  let component: AjoutModifierLabComponent;
  let fixture: ComponentFixture<AjoutModifierLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModifierLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutModifierLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
