import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/chatMessage';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  model = new ChatMessage("");
  messageList:string[]=[]

  sendMessage(): void {

  };
  

  constructor() { }

  ngOnInit(): void {
  }

  submitted =false;
  onSubmit(){
    
  }


}
