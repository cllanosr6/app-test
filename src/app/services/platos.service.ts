import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Platos } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listaPlatos(): Observable<Platos[]> {
    const url = `${this.apiUrl}/listaPlatos`;
    return this.http.get<Platos[]>(url).pipe(
      catchError(this.handleError),
      map((data: Platos[]) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      const err = {
          msg: 'No tienes conexión a internet'
      };
      return throwError(err);
    } else {
      return throwError(error.error);
    }
  }
}
