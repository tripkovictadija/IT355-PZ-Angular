import { Pipe, PipeTransform } from '@angular/core';
import { Zakazivanje } from '../interface/zakazivanje';


@Pipe({ name: 'filterImePac', pure: false })

export class FilterIme implements PipeTransform {

    transform(zakazivanja: Zakazivanje[], carPrice: any): Zakazivanje[] {
        const resultArray = [];
        
        if (zakazivanja.length === 0 || carPrice == '') {
            return zakazivanja;
        }

        for (const item of zakazivanja) {
            if (item.ime_pacijenta == String(carPrice)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
