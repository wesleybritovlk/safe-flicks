import { CommonEntity } from "src/common/entity.common";
import { Column, Entity, ManyToOne } from "typeorm";
import { MovieEntity } from "../movie/movie.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class WatchListEntity extends CommonEntity {
    @ManyToOne(() => UserEntity, { nullable: false })
    user: UserEntity

    @ManyToOne(() => MovieEntity, { nullable: false })
    movie: MovieEntity

    @Column({ nullable: false })
    title: string

    @Column({ default: false })
    favorite: boolean
}
