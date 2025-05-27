import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeaturedProductComponent } from '../../featured-product/featured-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FeaturedProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'T-Shirts'
    },
    {
      id: 2,
      name: 'Linen Summer Shirt',
      price: 49.99,
      image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Shirts'
    },
    {
      id: 3,
      name: 'Designer Denim Jeans',
      price: 89.99,
      image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Pants'
    },
    {
      id: 4,
      name: 'Cashmere Sweater',
      price: 129.99,
      image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Sweaters'
    }
  ];

  categories = [
    {
      name: 'Men\'s Collection',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/products'
    },
    {
      name: 'Women\'s Collection',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/products'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/products'
    }
  ];

  stores = [
    { name: 'New York Flagship', address: '123 5th Avenue, New York, NY', image: 'https://images.pexels.com/photos/5872349/pexels-photo-5872349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Los Angeles Store', address: '456 Rodeo Drive, Beverly Hills, CA', image: 'https://images.pexels.com/photos/6755221/pexels-photo-6755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Chicago Store', address: '789 Michigan Avenue, Chicago, IL', image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
  ];
}