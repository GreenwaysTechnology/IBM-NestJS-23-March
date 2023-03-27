import { Controller, Get } from "@nestjs/common";
import { GreeterService } from "./greeter.service";


@Controller('api/greeter')
export class GreeterController {
    constructor(private greeterService: GreeterService) { }

    //HTTP apis
    @Get()
    public sayGreet(): string {
        return this.greeterService.sayGreet();
    }
}