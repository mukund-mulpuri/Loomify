import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  image: string;
  description?: string;
  flagship: boolean;
}

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {
  locationSearch: string = '';
  allStores: Store[] = [];
  filteredStores: Store[] = [];
  flagshipStores: Store[] = [];
  
  constructor() {
    this.loadStores();
    this.filteredStores = [...this.allStores];
    this.flagshipStores = this.allStores.filter(store => store.flagship);
  }
  
  loadStores() {
    // In a real app, this would come from a service
    this.allStores = [
      {
        id: 1,
        name: 'New York Flagship',
        address: '123 5th Avenue',
        city: 'New York',
        state: 'NY',
        zip: '10010',
        phone: '(212) 555-1234',
        hours: 'Mon-Sat 10am-8pm, Sun 11am-6pm',
        image: 'https://images.pexels.com/photos/5872349/pexels-photo-5872349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Our signature store features our complete collection across three floors of premium fabrics and designs. Visit our in-store cafe and custom tailoring service.',
        flagship: true
      },
      {
        id: 2,
        name: 'Los Angeles Store',
        address: '456 Rodeo Drive',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '90210',
        phone: '(310) 555-5678',
        hours: 'Mon-Sat 10am-9pm, Sun 12pm-6pm',
        image: 'https://images.pexels.com/photos/6755221/pexels-photo-6755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Our West Coast flagship store offers a curated collection of our premium designs with a focus on our California-inspired seasonal lines.',
        flagship: true
      },
      {
        id: 3,
        name: 'Chicago Store',
        address: '789 Michigan Avenue',
        city: 'Chicago',
        state: 'IL',
        zip: '60611',
        phone: '(312) 555-9012',
        hours: 'Mon-Sat 9am-7pm, Sun 11am-5pm',
        image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        flagship: false
      },
      {
        id: 4,
        name: 'Miami Store',
        address: '101 Collins Avenue',
        city: 'Miami',
        state: 'FL',
        zip: '33139',
        phone: '(305) 555-3456',
        hours: 'Mon-Sun 10am-9pm',
        image: 'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        flagship: false
      },
      {
        id: 5,
        name: 'Seattle Store',
        address: '222 Pike Street',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        phone: '(206) 555-7890',
        hours: 'Mon-Sat 9am-8pm, Sun 10am-6pm',
        image: 'https://images.pexels.com/photos/6192343/pexels-photo-6192343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        flagship: false
      },
      {
        id: 6,
        name: 'Boston Store',
        address: '333 Newbury Street',
        city: 'Boston',
        state: 'MA',
        zip: '02115',
        phone: '(617) 555-2345',
        hours: 'Mon-Sat 10am-7pm, Sun 11am-5pm',
        image: 'https://images.pexels.com/photos/6197695/pexels-photo-6197695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        flagship: false
      }
    ];
  }
  
  filterStores() {
    if (!this.locationSearch.trim()) {
      this.filteredStores = [...this.allStores];
      return;
    }
    
    const search = this.locationSearch.toLowerCase();
    this.filteredStores = this.allStores.filter(store => 
      store.city.toLowerCase().includes(search) || 
      store.state.toLowerCase().includes(search) || 
      store.zip.includes(search)
    );
  }
}