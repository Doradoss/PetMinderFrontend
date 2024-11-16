import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarHomeComponent } from "./component/navbar-home/navbar-home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petminder';
}
