import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotice } from './legal-notice';

describe('LegalNotice', () => {
  let component: LegalNotice;
  let fixture: ComponentFixture<LegalNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice],
      declarations: [LegalNotice], // Ensure the component is declared
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNotice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
