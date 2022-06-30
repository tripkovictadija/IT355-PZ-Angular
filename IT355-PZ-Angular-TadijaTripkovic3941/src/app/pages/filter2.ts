import { Pipe, PipeTransform } from '@angular/core';
import { Proizvod } from '../interface/proizvod';


@Pipe({ name: 'filterNazivProizvoda', pure: false })

export class filterNazivProizvoda implements PipeTransform {

    transform(proizvodi: Proizvod[], carPrice: any): Proizvod[] {
        const resultArray = [];
        
        if (proizvodi.length === 0 || carPrice == '') {
            return proizvodi;
        }

        for (const item of proizvodi) {
            if (item.naziv_proizvoda == String(carPrice) || item.proizvodjac == String(carPrice)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}