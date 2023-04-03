import { CreateCatInput } from "src/graphql-schema";
export class CreateCatDto extends CreateCatInput {
    age: number;
}