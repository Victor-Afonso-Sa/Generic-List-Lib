import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalConfirmComponent } from './generic-modal-confirm.component';

describe('GenericModalConfirmComponent', () => {
  let component: GenericModalConfirmComponent;
  let fixture: ComponentFixture<GenericModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericModalConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
