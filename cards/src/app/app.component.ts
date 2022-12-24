import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: "Neat Tree",
      imageUrl: "assets/tree.jpeg",
      username: "nature",
      content: 'I saw this neat tree today'
    },
    { 
      title: "Snowy Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "mountainlover",
      content: 'Check out this mountain'
    },
    { 
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biking12234",
      content: 'I did a little biking today'
    }
  ]
}
