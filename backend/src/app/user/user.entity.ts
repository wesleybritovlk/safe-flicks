import { CommonEntity } from "src/common/entity.common";
import { Column, Entity } from "typeorm";

export enum Sex {
    NOT_KNOW = 'not_know',
    MALE = 'male',
    FEMALE = 'female',
    NOT_APPLICABLE = 'not_applicable'
}

@Entity()
export class UserEntity extends CommonEntity {
    @Column({ length: 50, nullable: false })
    firstName: string;

    @Column({ length: 50, nullable: false })
    lastName: string;

    @Column({ nullable: false })
    dateBirth: Date;

    @Column({ type: 'enum', enum: Sex, default: Sex.NOT_KNOW })
    sex: Sex

    @Column({ length: 255, unique: true, nullable: false })
    email: string

    @Column({ length: 100, nullable: false })
    passHash: string
}
