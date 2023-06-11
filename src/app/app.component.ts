import {Component, OnInit} from '@angular/core';
import {DEFAULT_VTT_CONTENT} from "./default-vtt-content";

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
