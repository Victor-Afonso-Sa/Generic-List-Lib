import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalExportComponent } from './generic-modal-export.component';

describe('GenericModalExportComponent', () => {
  let component: GenericModalExportComponent;
  let fixture: ComponentFixture<GenericModalExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericModalExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
