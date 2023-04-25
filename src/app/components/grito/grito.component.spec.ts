import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GritoComponent } from './grito.component';

describe('GritoComponent', () => {
  let component: GritoComponent;
  let fixture: ComponentFixture<GritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
