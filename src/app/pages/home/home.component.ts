import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MODE_TYPES, STORAGE } from '@app/core/constants/app.constant';
import { ChatService } from '@app/core/services/chat.service';
import { StorageService } from '@app/core/services/storage.service';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, JsonPipe, FormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  helperService = inject(HelperService);
  apiLoading = false;
  light = MODE_TYPES.light;
  themeMode = MODE_TYPES.light;
  sample = sample;
  question = '';
  private destroyRef = inject(DestroyRef);
  qaList: { question?: string, answer?: string }[] = [];

  constructor(
    private chatService: ChatService,
    private storageService: StorageService
  ) { }
  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }

  sendRequest(): void {

    this.apiLoading = true;
    const queAns = {
      question: this.question
    };
    this.qaList.push(queAns);
    const param = {
      question: this.question,
      token: `Bearer ${this.storageService.get(STORAGE.TOKEN)}`
    }
    this.question = '';
    this.chatService.getResponse(param)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res) {
            this.apiLoading = false;
            // queAns = {
            //   ...queAns,
            //   answer: res.result
            // };
            // const lastItem = animals[animals. length - 1}
            this.qaList[this.qaList.length - 1].answer = res.result;
            // this.qaList.push(queAns);
            console.log(this.qaList);


            console.log(res);
          }
        },
        error: (err) => {
          if (err) {
            this.apiLoading = false;
          }
        }
      })
  }
}


export const sample = {
  "height": 6.2,
  "width": 7.3,
  "length": 9.1,
  "color": {
    "r": 255,
    "g": 200,
    "b": 10
  }
}
