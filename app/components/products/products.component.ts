import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FeaturedProductComponent } from '../../featured-product/featured-product.component';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,FeaturedProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   featuredSectionProducts: any[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  
  searchQuery: string = '';
  selectedCategory: string = '';
  sortOption: string = 'name-asc';
  
  ngOnInit() {
    this.loadProducts();
    this.extractCategories();
    this.filteredProducts = [...this.products];
    this.sortProducts();
  }
  
  loadProducts() {
    // In a real app, this would come from a service
    this.products = [
      {
        id: 1,
        name: 'Premium Cotton T-Shirt',
        price: 29.99,
        image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'T-Shirts',
        description: 'Ultra-soft premium cotton t-shirt with a relaxed fit. Perfect for everyday wear.'
      },
      {
        id: 2,
        name: 'Linen Summer Shirt',
        price: 49.99,
        image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Shirts',
        description: 'Breathable linen shirt, perfect for summer days. Features a relaxed fit and classic collar.'
      },
      {
        id: 3,
        name: 'Designer Denim Jeans',
        price: 89.99,
        image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Pants',
        description: 'Premium denim jeans with a modern cut. Durable and stylish for any casual occasion.'
      },
      {
        id: 4,
        name: 'Cashmere Sweater',
        price: 129.99,
        image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Sweaters',
        description: 'Luxuriously soft cashmere sweater that provides warmth without bulk. A wardrobe essential.'
      },
      {
        id: 5,
        name: 'Silk Blouse',
        price: 79.99,
        image: 'https://images.pexels.com/photos/6046226/pexels-photo-6046226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Blouses',
        description: 'Elegant silk blouse with a subtle sheen. Perfect for both office wear and evenings out.'
      },
      {
        id: 6,
        name: 'Wool Blazer',
        price: 149.99,
        image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Jackets',
        description: 'Tailored wool blazer that adds sophistication to any outfit. Features premium lining and buttons.'
      },
      {
        id: 7,
        name: 'Organic Cotton Dress',
        price: 69.99,
        image: 'https://images.pexels.com/photos/6626902/pexels-photo-6626902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Dresses',
        description: 'Eco-friendly dress made from organic cotton. Features a flattering cut and pockets.'
      },
      {
        id: 8,
        name: 'Leather Belt',
        price: 39.99,
        image: 'https://images.pexels.com/photos/8801165/pexels-photo-8801165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Accessories',
        description: 'Genuine leather belt with a classic buckle. A versatile addition to any wardrobe.'
      }
    ];
  }
  
  extractCategories() {
    // Get unique categories
    const categorySet = new Set(this.products.map(product => product.category));
    this.categories = Array.from(categorySet);
  }
  
  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      // Filter by search query
      const matchesSearch = this.searchQuery === '' || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = this.selectedCategory === '' || 
        product.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    this.sortProducts();
  }
  
  sortProducts() {
    switch(this.sortOption) {
      case 'name-asc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-low':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
  }
  
  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.sortOption = 'name-asc';
    this.filterProducts();
  }
}