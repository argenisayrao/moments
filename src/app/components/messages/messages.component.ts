import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
public faTimes=faTimes;
public message: string ='';
  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.message = this.messageService.message;
  }

}
