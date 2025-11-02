import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectionoption :'all'|'single'='all';
  images=[
        {url:"../../assets/ads/hot offers2.jpg",title:"hot offers"},
        {url:"../../assets/ads/new feature.png",title:"new feature"},
        {url:"../../assets/ads/new offers1.webp",title:"new offers1"},
        {url:"../../assets/ads/new surveys notifications.png",title:"new surveys notifications"},
        {url:"../../assets/ads/payment success.jpg" ,title:"payment success"},
        {url:"../../assets/ads/payment success.jpg" ,title:"payment success"}]

}
