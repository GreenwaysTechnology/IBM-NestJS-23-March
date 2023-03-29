import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    //column mapping
    @PrimaryGeneratedColumn() //primary key with id auto generation
    id: number
    @Column()
    firstName: string
    @Column()
    lastName: string
    @Column()
    isActive: boolean
}
