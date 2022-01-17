import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  addMenu(data: any){
    return this.http.post<any>('http://localhost:3000/menus', data)
    .pipe(map((res: any) => {
      return res;
    }));
  }

  getMenu(){
    return this.http.get<any>('http://localhost:3000/menus')
    .pipe(map((res: any) => {
      return res;
    }));
  }
  updateMenu(data: any, id: number){
    return this.http.put<any>('http://localhost:3000/menus/' + id, data)
    .pipe(map((res: any) => {
      return res;
    }));
  }
  deleteMenu(id: number){
    return this.http.delete<any>('http://localhost:3000/menus/' + id)
    .pipe(map((res: any) => {
      return res;
    }));
  }
}
