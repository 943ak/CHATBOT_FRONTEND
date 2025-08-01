import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  role: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://chatbot-backend-bl6g.onrender.com/chat'; // Replace with your actual Render URL

  constructor(private http: HttpClient) { }

  sendMessage(messages: Message[]): Observable<{ reply: string }> {
    return this.http.post<{ reply: string }>(this.apiUrl, { messages });
  }
}
