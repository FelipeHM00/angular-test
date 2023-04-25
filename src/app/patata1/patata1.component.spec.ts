import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patata1Component } from './patata1.component';

describe('Patata1Component', () => {
  let component: Patata1Component;
  let fixture: ComponentFixture<Patata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Patata1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
