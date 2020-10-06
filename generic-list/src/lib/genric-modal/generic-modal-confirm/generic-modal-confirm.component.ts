import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GenericListService } from '../../generic-list.service';

@Component({
  selector: 'lib-generic-modal-confirm',
  templateUrl: './generic-modal-confirm.component.html',
  styleUrls: ['./generic-modal-confirm.component.css']
})
export class GenericModalConfirmComponent implements OnInit {
  @Output() funcao: EventEmitter<any> = new EventEmitter();
  @Input() registro: object;
  @Input() title: string = 'Confirmar seleção';
  @Input() icon: string = 'warning';
  @Input() msg: string = 'Deseja mesmo excluir?';
  @Input() cancel = 'Cancelar';
  @Input() confirm = 'Sim';
  @Input() classeConfirmModal;
  ModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private listaService: GenericListService
    ) { }

  ngOnInit(): void {

  }
  onConfirm(){
    this.funcao.emit([this.registro]);
    this.listaService.deleteOnViewList.emit([this.registro]);
    setTimeout(() => this.modalService.hide(), 1000);
  }
  onClose(){
    this.modalService.hide();
  }
}

