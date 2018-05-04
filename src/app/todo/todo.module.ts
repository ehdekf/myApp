import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
    providers : [], //providers ���񽺿� �ش��ϴ°͵��� ����
    declarations: [TodosComponent], // declarations ���ø����� ����Ҽ��ְԲ� ����
    exports: [TodosComponent]
})
export class TodoModule { }
