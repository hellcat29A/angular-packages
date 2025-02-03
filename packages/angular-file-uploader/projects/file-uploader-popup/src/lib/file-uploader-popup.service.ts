import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/types';
@Injectable({
  providedIn: 'root'
})
export class FileUploaderPopupService {

  constructor(private readonly httpClient: HttpClient) {}

  getImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>('http://localhost:3000/images');
  }
  deleteImage(id: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/images/${id}`);
  }
  addImage(newImage: any): Observable<Image> {
    return this.httpClient.post<Image>(
      'https://api.imgur.com/3/image',
      newImage
    );
  }}
