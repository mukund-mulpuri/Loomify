import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model'; // Adjust path if needed

@Component({
  standalone: true,
  selector: 'app-featured-product',
  imports: [CommonModule],
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent {
  @Input() product!: Product;
}
