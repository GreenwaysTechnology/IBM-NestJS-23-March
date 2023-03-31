
//service declaration
import { Observable } from "rxjs";
import { PersonById } from "./interfaces/person-by-id.interfacee";
import { Person } from "./interfaces/person.interface";

export interface PersonService {
    findOne(data: PersonById): Observable<Person>
}
