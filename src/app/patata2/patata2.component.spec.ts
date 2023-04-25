import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patata2Component } from './patata2.component';

describe('Patata2Component', () => {
  let component: Patata2Component;
  let fixture: ComponentFixture<Patata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Patata2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
