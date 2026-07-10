import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from './home/home';
import { Shop } from "./shop/shop";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Shop],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('velinea');
}
