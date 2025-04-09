import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    limit: number = 100,
    ellipsis: string = '...',
  ): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    let truncated = value.slice(0, limit);
    truncated = truncated.slice(
      0,
      Math.min(truncated.length, truncated.lastIndexOf(' ')),
    );

    return truncated + ellipsis;
  }
}
