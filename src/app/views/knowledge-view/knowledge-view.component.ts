import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/knowledge.service'

@Component({
  selector: 'app-knowledge-view',
  templateUrl: './knowledge-view.component.html',
  styleUrls: ['./knowledge-view.component.scss']
})
export class KnowledgeViewComponent implements OnInit {

  constructor(private serviceKnowledge: KnowledgeService) { }
  knowledgeArray = []
  ngOnInit(): void {
    this.getAllKnowledge();
  }

  getAllKnowledge() {
    this.serviceKnowledge.getAll().subscribe((response: any)=>{ this.knowledgeArray = response});
  }

}
