import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BulkRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  orderType: string;
  quantity: string;
  deadline: string;
  message: string;
}

@Component({
  selector: 'app-bulk-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bulk-order.component.html',
  styleUrl: './bulk-order.component.css'
})
export class BulkOrderComponent {
  bulkRequest: BulkRequest = {
    name: '',
    email: '',
    phone: '',
    company: '',
    orderType: '',
    quantity: '',
    deadline: '',
    message: ''
  };
  
  isSubmitting = false;
  showSuccess = false;
  
  submitRequest() {
    // Basic validation
    if (!this.bulkRequest.name || !this.bulkRequest.email || !this.bulkRequest.phone || 
        !this.bulkRequest.orderType || !this.bulkRequest.quantity) {
      alert('Please fill in all required fields.');
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitted bulk request:', this.bulkRequest);
      this.isSubmitting = false;
      this.showSuccess = true;
      
      // Reset form after 5 seconds
      setTimeout(() => {
        this.resetForm();
      }, 5000);
    }, 1500);
  }
  
  resetForm() {
    this.bulkRequest = {
      name: '',
      email: '',
      phone: '',
      company: '',
      orderType: '',
      quantity: '',
      deadline: '',
      message: ''
    };
    this.showSuccess = false;
  }
}