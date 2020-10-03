import { OnInit } from "@angular/core"
import { Album } from '../album'
import { ProductService } from '../product.service'


export class ProductTrackListing {
    albumInfo: Album

    constructor(private _productService) {
        
    }

    ngOnInit() {
        this._productService.getAblum(1).subscribe(response => 
            this.albumInfo = response);
    }

}