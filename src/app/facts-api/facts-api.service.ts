import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FactsApiService {

    constructor(private http: HttpClient) { }

    public getAnimalFacts(type: string) {
        return this.http.get(`assets/code/api/facts/${type}.json`);
    }

}