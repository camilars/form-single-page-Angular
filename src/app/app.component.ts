import { Component, Input, OnInit } from '@angular/core';
import { ChangeTitleService } from './services/change-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() title: string;

  constructor(private chageTitleService: ChangeTitleService) {}

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle(): void {
    this.chageTitleService.title.subscribe(
      (title) => {
        this.title = title;
        console.log(title);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
