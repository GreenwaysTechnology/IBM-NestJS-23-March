import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Person } from './interfaces/person.interface';
import { PersonService } from './person.service';

//http://localhost:3000/person/1

@Controller('person')
export class PersonController implements OnModuleInit {
    //declare person
    private personService: PersonService;
    constructor(@Inject('PERSON_PACKAGE') private readonly client: ClientGrpc) { }

    onModuleInit() {
        //initalize the person Service Instance
        this.personService = this.client.getService<PersonService>('PersonService')
        //testing 
        this.personService.findOne({ id: 2 }).subscribe(value => console.log(value))
    }

    @Get(':id')
    getById(@Param('id') id: string): Observable<Person> {
        return this.personService.findOne({ id: +id });
    }
}
