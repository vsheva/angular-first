import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  log = [1];

  onToggle() {
    this.showContent = !this.showContent;
    this.log.push(this.log.length+1)


  }
}
