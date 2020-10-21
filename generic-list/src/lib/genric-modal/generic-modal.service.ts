import { EventEmitter, Injectable } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { GenericFormComponent } from "../generic-form/generic-form.component";
import { GenericModalConfirmComponent } from "./generic-modal-confirm/generic-modal-confirm.component";
import { GenericModalExportComponent } from "./generic-modal-export/generic-modal-export.component";

@Injectable({
  providedIn: "root",
})
export class GenericModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  showConfirm(funcao: EventEmitter<any>, registro: object, config) {
    const confirmbsModalRef: BsModalRef = this.modalService.show(
      GenericModalConfirmComponent,
      { id: 1 }
    );
    confirmbsModalRef.content.registro = registro;
    confirmbsModalRef.content.funcao = funcao;
    if (config) {
      if (config.menssagem) {
        confirmbsModalRef.content.msg = config.menssagem;
      }
      if (config.icon) {
        confirmbsModalRef.content.icon = config.icon;
      }
      if (config.textConfirm) {
        confirmbsModalRef.content.confirm = config.textConfirm;
      }
      if (config.textCancel) {
        confirmbsModalRef.content.cancel = config.textCancel;
      }
      if (config.title) {
        confirmbsModalRef.content.title = config.title;
      }
      if (config.classe) {
        confirmbsModalRef.content.classeConfirmModal = config.classe;
      }
    }
    return confirmbsModalRef.content as GenericModalConfirmComponent;
  }
  showForm(
    funcao: EventEmitter<any>,
    label,
    edit,
    control,
    tipos?: object,
    obrigatario?: any[],
    readOnly?: any[],
    classeForm?: string,
    registros?: object
  ) {
    let config = {
      backdrop: true,
      ignoreBackdropClick: true,
      id: 1,
      class: "modal-lg",
      keyboard: false,
    };
    const formModalRef: BsModalRef = this.modalService.show(
      GenericFormComponent,
      config
    );
    formModalRef.content.label = label;
    if (registros) {
      formModalRef.content.registros = registros;
      formModalRef.content.registrosCopy = Object.assign({}, registros);
    }
    if (tipos) {
      formModalRef.content.tipos = tipos;
    }
    if (obrigatario) {
      formModalRef.content.obrigatorio = obrigatario;
    }
    if (classeForm) {
      formModalRef.content.classeForm = classeForm;
    }
    if (readOnly) {
      formModalRef.content.readOnly = readOnly;
    }
    formModalRef.content.controlador = control;
    formModalRef.content.edit = edit;
    formModalRef.content.funcao = funcao;
  }
  showExport(regtitles, cabecalho, registros, filename?: string) {
    const exportModal: BsModalRef = this.modalService.show(
      GenericModalExportComponent,
      { id: 1, class: "modal-dialog-centered" }
    );
    exportModal.content.cabecalho = cabecalho;
    exportModal.content.regtitles = regtitles;
    exportModal.content.registros = registros;
    if (filename) {
      exportModal.content.filename = filename;
    }
  }
}
