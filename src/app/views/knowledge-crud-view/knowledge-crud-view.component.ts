import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatSort } from "@angular/material/sort"
import { MatTableDataSource } from "@angular/material/table"
import { KnowledgeService } from '../../services/knowledge.service'
import { Knowledge } from 'src/app/models/knowledge';
import { Router } from '@angular/router';
import * as _ from "lodash"

@Component({
  selector: 'app-knowledge-crud-view',
  templateUrl: './knowledge-crud-view.component.html',
  styleUrls: ['./knowledge-crud-view.component.scss']
})
export class KnowledgeCrudViewComponent implements OnInit, AfterViewInit {

  knowledgeData!: Knowledge;
  dataSource = new MatTableDataSource();
  editMode = false;
  isFiltering = false;

  displayedColumns: string[] = ['id','title','urlToImage','summary','content', "actions"];

  constructor(private serviceKnowledge: KnowledgeService, private router: Router) {
    this.knowledgeData = {} as Knowledge
  }

  @ViewChild("knowledgeForm", { static: false }) knowledgeForm!: NgForm;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllKnowledges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Del hijo le estamos pasando al padre
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }

  getAllKnowledges(): void {
    this.serviceKnowledge.getAll().subscribe((response: any) => { this.dataSource.data = response })
  }

  editItem(element: any): void {
    console.log(element);
    this.knowledgeData = _.cloneDeep(element);
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.knowledgeForm.resetForm();
  }

  deleteKnowledge(id: number): void {
    this.serviceKnowledge.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((item: any) => item.id != id)
    });
    console.log(this.dataSource.data)
  }

  addKnowledge(): void {
    const newKnowledge = {
      title: this.knowledgeData.title,
      urlToImage: this.knowledgeData.urlToImage,
      summary: this.knowledgeData.summary,
      content: this.knowledgeData.content
    }
    this.serviceKnowledge.create(newKnowledge).subscribe((newItem: any) => {
      this.dataSource.data.push({...newItem})
      this.dataSource.data = this.dataSource.data.map((item)=>item)
    });
  }

  updateKnowledge() {
    this.serviceKnowledge.update(this.knowledgeData.id, this.knowledgeData).subscribe((toUpdatedItem: any) => {
      this.dataSource.data = this.dataSource.data.map((item: any) => {
        if (item.id == toUpdatedItem.id)
          item = toUpdatedItem
        return item;
      })
    });
    this.cancelEdit();
  }

  onSubmit() {
    if(this.knowledgeForm.form.valid) {
      if(this.editMode) {
        this.updateKnowledge();
      }
      else {
        this.addKnowledge()
      }
    }else {
      console.log("Invalid data!")
    }
  }

  navigateToAddKnowledge(): void {
    this.router.navigate(['/admin/knowledge/new']).then(()=> console.log("Navigate to add knowledge"))
  }

  navigateToEditKnowledge(knowledgeId: number): void {
    this.router.navigate([`/admin/knowledge/${knowledgeId}`]).then(()=> console.log("Navigate to edit knowledge"))
  }

  refresh(): void {
    console.log("Reloaded");
    this.getAllKnowledges();
  }

}
