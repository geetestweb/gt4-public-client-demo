import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeetestCaptchaComponent } from './geetest-captcha.component';

describe('GeetestCaptchaComponent', () => {
  let component: GeetestCaptchaComponent;
  let fixture: ComponentFixture<GeetestCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeetestCaptchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeetestCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
