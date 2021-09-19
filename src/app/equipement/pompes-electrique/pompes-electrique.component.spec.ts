import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompesElectriqueComponent } from './pompes-electrique.component';

describe('PompesElectriqueComponent', () => {
  let component: PompesElectriqueComponent;
  let fixture: ComponentFixture<PompesElectriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompesElectriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompesElectriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
