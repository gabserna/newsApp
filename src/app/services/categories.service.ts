import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = [
    { name: 'Start', icon: 'home' },
    { name: 'General', icon: 'description' },
    { name: 'Business', icon: 'add_business' },
    { name: 'Social', icon: 'theater_comedy' },
    { name: 'Health', icon: 'health_and_safety' },
    { name: 'Science', icon: 'biotech' },
    { name: 'Sports', icon: 'sports_football' },
    { name: 'Tech', icon: 'important_devices' },
    { name: '', icon: 'search' },
    { name: '', icon: 'thumb_up' },
  ];
}
