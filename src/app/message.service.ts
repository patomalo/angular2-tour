import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class MessageService {
  messages: String[] = [];

  add(message: string) {
    console.log("THIS", message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
