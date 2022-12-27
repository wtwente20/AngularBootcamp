import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Through the Forest',
      url: 'https://images.unsplash.com/photo-1496526311033-8a80ae14a1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbmFsJTIwZmFudGFzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'In The Wastes',
      url: 'https://images.unsplash.com/photo-1669868669125-ba61f89e2d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Riptide',
      url: 'https://images.unsplash.com/photo-1669872666457-d5a771c83715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Just a Grain of Sand on The Beach',
      url: 'https://images.unsplash.com/photo-1672152024595-d8f2ec9dbdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'The Game',
      url: 'https://images.unsplash.com/photo-1672088491419-33f6f85a7c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Lowkey Getaway',
      url: 'https://images.unsplash.com/photo-1672162723391-9fd523f02f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Mystery Photo',
      url: 'https://images.unsplash.com/photo-1672091161490-66d2ca1e5f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Winter Wonderland',
      url: 'https://images.unsplash.com/photo-1672108654202-9f632dc907fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Sunset Canyon',
      url: 'https://images.unsplash.com/photo-1671227498016-93aa927686f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    }
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
