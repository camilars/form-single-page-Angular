import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: string | 'submit' | 'button' = 'submit';
  @Input() size: string | 'medium' | 'large' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
