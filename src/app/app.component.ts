import {Component, OnInit} from '@angular/core';

const DEFAULT_VTT_CONTENT: string =
`WEBVTT

00:00:01.000 --> 00:02.500
- Uncle, you better come look at this.

00:00:02.600 --> 00:03.400
- What?

00:00:03.500 --> 00:06.000
- There's a man standing in the street.`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public text: string = DEFAULT_VTT_CONTENT;
  public subtitlesSrc: string = '';

  ngOnInit() {
    this.generateSubtitles();
  }

  public generateSubtitles() {
    const blob: Blob = new Blob([this.text], { type: 'text/vtt' });
    this.subtitlesSrc = URL.createObjectURL(blob);
  }
}
