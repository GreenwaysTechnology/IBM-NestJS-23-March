import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class GreeterService {
    constructor() { }

    //apis 
    public sayGreet(): string {
        return 'Greet to Nest App'
    }

}