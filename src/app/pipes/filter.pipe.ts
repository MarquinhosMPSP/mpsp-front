import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: String, ...args: any[]): any {
    if (!value) return items;
    return items.filter(item =>
      Object.entries(item)
        .filter(([key, val]) => args[0].includes(key))
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
    );
  }
}
