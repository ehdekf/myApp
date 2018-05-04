import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
    providers : [], //providers 서비스에 해당하는것들을 선언
    declarations: [TodosComponent], // declarations 탬플릿에서 사용할수있게끔 선언
    exports: [TodosComponent]
})
export class TodoModule { }
