import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WfToolBarComponent } from './components/wf-tool-bar/wf-tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KnowledgeViewComponent } from './views/knowledge-view/knowledge-view.component';
import { WfCardComponent } from './components/wf-card/wf-card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { KnowledgeCrudViewComponent } from './views/knowledge-crud-view/knowledge-crud-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import {RouterModule} from "@angular/router";



// import { KnowledgeService } from './services/knowledge.service';


@NgModule({
  declarations: [
    AppComponent,
    WfToolBarComponent,
    KnowledgeViewComponent,
    WfCardComponent,
    KnowledgeCrudViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
    // MatTableDataSource
    // KnowledgeService

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
