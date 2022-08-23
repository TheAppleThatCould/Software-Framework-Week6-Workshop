import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
