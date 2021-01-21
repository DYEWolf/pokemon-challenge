import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicuneComponent } from './suicune.component';

describe('SuicuneComponent', () => {
  let component: SuicuneComponent;
  let fixture: ComponentFixture<SuicuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuicuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuicuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
