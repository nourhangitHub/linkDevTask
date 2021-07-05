import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform{
    transform(date: any) {
        const newDate = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const year = newDate.getFullYear();
        return `${days[newDate.getDay()]} ${newDate.getDate()} ${months[newDate.getMonth()]} ${year}`;
    }
}