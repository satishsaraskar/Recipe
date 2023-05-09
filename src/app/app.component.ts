import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe';
  loadedFeature: string ='recipe';

  //  loadedFeature = 'recipe';

  onNavigate(feature:string) {
    console.log('main-app',feature)
    this.loadedFeature = feature
  }
}
