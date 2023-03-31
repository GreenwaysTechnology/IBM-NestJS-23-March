import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'person', // ['person','hero','customer']
    protoPath: join(__dirname, './person/person.proto'), //['./hero/hero.proto','./customer/customer.proto]
  },
};
