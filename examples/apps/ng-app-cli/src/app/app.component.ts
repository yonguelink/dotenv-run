import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app-cli';
  env = import.meta.env['NODE_ENV'];
  version = environment.env.NGX_VERSION;
  appHome = import.meta.env['NGX_USER_HOME'];
  home = import.meta.env['NGX_USER_HOME'];
}
