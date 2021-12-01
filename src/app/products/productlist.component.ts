import { IProduct } from "./productlist";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number  = 50;
    imageMargin: number = 1.5;
    showImage: boolean = false;
    private _listings: string = '';
    get listings(): string {
        return this._listings;
    }
    set listings(value: string) {
        this._listings = value;
        console.log('In setter', value);
        this.filterProducts = this.checkFilters(value);
    }

    filterProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "reviewsVote": 35,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "reviewsVote": 67,
            "imageUrl": "assets/images/garden_cart.png"
          }
    ];

    checkFilters(filterTerms : string): IProduct[] {
        filterTerms = filterTerms.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterTerms));
    };

    toggleImage(): void{
        this.showImage = ! this.showImage;
    };
    
    ngOnInit(): void{
        this._listings = 'cart'
    }
}