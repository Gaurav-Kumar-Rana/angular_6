import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
     name: 'UnderscoreRemover'
})

export class UnderscoreRemoverPipe implements PipeTransform{
    transform(value: string): string {
        value = value.split('_').join(' ');
        return value;
    }
}
