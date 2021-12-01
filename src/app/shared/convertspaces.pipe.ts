import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertSpaces'
})
export class ConvertSpacesPipe  implements PipeTransform{

    transform (values:string, character:string):string {
        return values.replace(character, ' ');
    }
}