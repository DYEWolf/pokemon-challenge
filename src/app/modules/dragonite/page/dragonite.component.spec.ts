import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoniteComponent } from './dragonite.component';

describe('DragoniteComponent', () => {
  let component: DragoniteComponent;
  let fixture: ComponentFixture<DragoniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
