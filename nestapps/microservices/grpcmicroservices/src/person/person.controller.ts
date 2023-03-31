import { Metadata } from "@grpc/grpc-js/build/src/metadata";
import { ServerUnaryCall } from "@grpc/grpc-js/build/src/server-call";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { PersonById } from "./interfaces/person-by-id.interfacee";
import { Person } from "./interfaces/person.interface";


//GRPC controller
@Controller()
export class PersonController {

    //grpc api :
    //@GrpcMethod('PersonService', 'findOne')
    @GrpcMethod('PersonService','findOne')
    findOne(data: PersonById, metadata: Metadata, call: ServerUnaryCall<any, any>): Person {
        //biz logic may go inside service layer : inside service layer you can write db logic
        const persons = [{
            id: 1,
            name: 'Subramanian'
        },
        {
            id: 2,
            name: 'Murugan'
        },
        {
            id: 3,
            name: 'Ram'
        },
        {
            id: 4,
            name: 'Vikram'
        }
        ]
        return persons.find((person) => person.id === data.id)

    }
}