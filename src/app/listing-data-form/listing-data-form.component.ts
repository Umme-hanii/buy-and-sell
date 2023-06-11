import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import { Listing } from '../types'

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{
  @Input() buttonText!: string
  @Input() currentName: string = ''
  @Input() currentDescription: string= ''
  @Input() currentPrice!: number

  @Output() onSubmit = new EventEmitter<Listing>()

  name: string = ''
  description: string = ''
  price!: number
  
  constructor(
  ) {}

  ngOnInit(): void {
    this.name = this.currentName
    this.description = this.currentDescription
    this.price = this.currentPrice    
  }

  onButtonClicked() : void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }

}
