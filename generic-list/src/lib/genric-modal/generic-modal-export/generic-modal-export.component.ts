import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BsModalService } from "ngx-bootstrap/modal";
import { jsPDF } from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
@Component({
  selector: "lib-generic-modal-export",
  templateUrl: "./generic-modal-export.component.html",
  styleUrls: ["./generic-modal-export.component.css"],
})
export class GenericModalExportComponent implements OnInit {
  constructor(private modalService: BsModalService) {}
  tipo = new FormControl("csv");
  @Input() registros: Array<object>;
  @Input() cabecalho;
  @Input() regtitles;
  @Input() filename = "data";
  ngOnInit(): void {}
  close() {
    this.modalService.hide();
  }
  export() {
    if (this.tipo.value == "csv") {
      this.downloadFileCsv();
    } else if (this.tipo.value == "pdf") {
      this.downloadFilePdf();
    }
    this.close();
  }
  ConvertToCSV(objArray) {
    let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    let row = "S.No,";
    for (let index in this.cabecalho) {
      row += this.cabecalho[index] + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + "";
      for (let index in this.regtitles) {
        let head = this.regtitles[index];
        line += "," + array[i][head];
      }
      str += line + "\r\n";
    }
    return str;
  }
  downloadFileCsv() {
    let csvData = this.ConvertToCSV(this.registros);
    let blob = new Blob(["\ufeff" + csvData], {
      type: "text/csv;charset=utf-8;",
    });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser =
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1;
    if (isSafariBrowser) {
      //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", this.filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  downloadFilePdf() {
    var doc = new jsPDF("l", "pt", "A4");
    var col = [];
    col.push(this.cabecalho);
    let array =
      typeof this.registros != "object"
        ? JSON.parse(this.registros)
        : this.registros;
    var rows = [];
    let temp = [];
    this.registros.forEach((data) => {
      rows.push(Object.values(data));
    });
    console.log(rows);
    (doc as any).autoTable({
      head: col,
      body: rows,
      styles: { halign: 'center' },
    });
    doc.save(`${this.filename}.pdf`);
  }
}
