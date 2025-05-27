import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Jane Smith',
      title: 'Founder & CEO',
      bio: 'With over 25 years in the textile industry, Jane founded Loomify to create clothing that combines quality, sustainability, and style.',
      image: 'https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Michael Chen',
      title: 'Design Director',
      bio: 'Michael brings 15 years of fashion design experience to lead our creative team in developing innovative, timeless collections.',
      image: 'https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sarah Johnson',
      title: 'Sustainability Officer',
      bio: 'Sarah ensures our commitment to eco-friendly practices is maintained throughout our entire supply chain and production process.',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Rodriguez',
      title: 'Head of Operations',
      bio: 'David oversees our global production network, ensuring the highest quality standards while maintaining ethical manufacturing practices.',
      image: 'https://images.pexels.com/photos/3778968/pexels-photo-3778968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
}