import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"maxSymbols",
    pure:true
})
export class MaxSymbolsPipe implements PipeTransform{
    transform(value: string, wordLength:number = 50) {
        if(value.length > wordLength){
            value = value.substring(0, (wordLength-3)) + '...';
        }

        return value;
    }

}
