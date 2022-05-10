import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeViewComponent } from './views/knowledge-view/knowledge-view.component';

const routes: Routes = [
  { path: "", component: KnowledgeViewComponent },
  { path: "knowledge", component: KnowledgeViewComponent },
  // { path: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
