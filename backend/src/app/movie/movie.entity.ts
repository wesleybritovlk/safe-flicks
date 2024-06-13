import { CommonEntity } from "src/common/entity.common";
import { Column, Entity } from "typeorm";

@Entity()
export class MovieEntity extends CommonEntity {
    @Column({ length: 100, nullable: false })
    title: string

    @Column({ nullable: false })
    releaseDate: Date

    @Column({ length: 10, nullable: false })
    runtime: string

    @Column({ length: 100, nullable: false })
    genre: string

    @Column({ length: 100, nullable: false })
    director: string

    @Column({ length: 100, nullable: false })
    writer: string

    @Column({ length: 100, nullable: false })
    actors: string

    @Column({ length: 255, nullable: false })
    plot: string

    @Column({ length: 50, nullable: false })
    language: string

    @Column({ length: 50, nullable: false })
    country: string
}
