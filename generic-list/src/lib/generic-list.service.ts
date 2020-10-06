import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericListService {
  @Output() addOnViewList: EventEmitter<any> = new EventEmitter();
  @Output() deleteOnViewList: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }
}
