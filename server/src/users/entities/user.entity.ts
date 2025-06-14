import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ unique : true })
    email: string;

    @Column()
    password: string;

    @Column({ default: 'user' })
    role: string;

}
