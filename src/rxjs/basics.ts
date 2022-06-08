import { Observable, of } from 'rxjs';

export function getVersion(): Observable<number> {
  return of(3.11);
}
