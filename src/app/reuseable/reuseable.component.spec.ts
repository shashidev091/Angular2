import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableComponent } from './reuseable.component';

describe('ReuseableComponent', () => {
  let component: ReuseableComponent;
  let fixture: ComponentFixture<ReuseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
