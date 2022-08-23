import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAreaComponent } from './chat-area/chat-area.component';

const routes: Routes = [
  {path: "chatArea", component: ChatAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
