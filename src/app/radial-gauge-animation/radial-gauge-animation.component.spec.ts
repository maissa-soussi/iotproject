import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialGaugeAnimationComponent } from './radial-gauge-animation.component';

describe('RadialGaugeAnimationComponent', () => {
  let component: RadialGaugeAnimationComponent;
  let fixture: ComponentFixture<RadialGaugeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialGaugeAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialGaugeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
