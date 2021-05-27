import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: []
})
export class MenuLateralComponent {
  constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
