import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }

  getReviews(){
    return axios.get('https://dummyjson.com/c/8ae1-a3b9-4e58-9ff3');
  }
}
