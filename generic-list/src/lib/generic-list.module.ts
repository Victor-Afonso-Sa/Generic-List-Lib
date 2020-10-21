import { NgModule } from '@angular/core';
import { GenericListComponent } from './generic-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GenericModalConfirmComponent } from './genric-modal/generic-modal-confirm/generic-modal-confirm.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { CommonModule } from '@angular/common';
import { GenericModalExportComponent } from './genric-modal/generic-modal-export/generic-modal-export.component';



@NgModule({
  declarations: [GenericListComponent, GenericModalConfirmComponent, GenericFormComponent, GenericModalExportComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [GenericListComponent]
})
export class GenericListModule { }
