import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices';
import { grpcClientOptions } from "src/grpc-client.options";
import { PersonController } from './person.controller'


@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'PERSON_PACKAGE',
                ...grpcClientOptions,
            },
        ]),
    ],
    controllers: [PersonController]
})
export class PersonModule {

}