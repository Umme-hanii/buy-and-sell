import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit{
  name: string = ''
  description: string = ''
  price: number = 0
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit() : void {
    alert('Your new listing has been added!')
    this.router.navigateByUrl('/my-listings')
  }

}
