import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params['id']
  }

}
