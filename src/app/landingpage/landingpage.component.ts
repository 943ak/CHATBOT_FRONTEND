import { Component, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService, Message } from '../chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements AfterViewInit {
  @ViewChildren('chatMessage') private chatMessages!: QueryList<ElementRef>;

  userInput: string = '';
  messages: Message[] = [];

  constructor(private chatService: ChatService) {}

  ngAfterViewInit() {
    this.chatMessages.changes.subscribe(() => {
      this.scrollToLastMessage();
    });
  }

  handleSubmit() {
    if (this.userInput.trim()) {
      const userMessage: Message = { role: 'user', content: this.userInput };
      this.messages.push(userMessage);

      this.chatService.sendMessage(this.messages).subscribe(response => {
        const botMessage: Message = { role: 'assistant', content: response.reply };
        this.messages.push(botMessage);
      });

      this.userInput = '';
    }
  }

  setExample(prompt: string) {
    this.userInput = prompt;
  }

  private scrollToLastMessage(): void {
    try {
      const lastMessage = this.chatMessages.last;
      if (lastMessage) {
        lastMessage.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch(err) { }
  }
}
