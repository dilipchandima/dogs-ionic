import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { API_URI } from "../config/constant";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DogService {

    constructor(private httpClient: HttpClient) {
    }

    getDogBreeds(): Observable<any> {
        const url = `${API_URI}/breeds/list`
        const headers = this.getAuthHeaders();
        return this.httpClient.get(url, { headers })
    }

    getSubBreeds(breed: string): Observable<any> {
        const url = `${API_URI}/breed/${breed}/list`
        const headers = this.getAuthHeaders();
        return this.httpClient.get(url, { headers })
    }

    getImage(breed: string): Observable<any> {
        const url = `${API_URI}/breed/${breed}/images/random`
        const headers = this.getAuthHeaders();
        return this.httpClient.get(url, { headers })
    }

    getAuthHeaders(): HttpHeaders {
        const headers = new HttpHeaders();
        return headers;
    }
}