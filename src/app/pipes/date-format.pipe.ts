import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe} from "@angular/common";

@Pipe({
    name: 'dateFormat',
    standalone: true
})

export class DateFormatPipe implements PipeTransform {
    transform(value: Date): string {
        const datePipe = new DatePipe('es-ES');
        return datePipe.transform(value, 'medium') || '';
    }
}