import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    
}
export class NavComponent {
    collapsed = false;
    toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
    }
}
