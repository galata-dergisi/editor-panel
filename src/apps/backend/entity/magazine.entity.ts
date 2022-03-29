import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Magazine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  publishDateText: string = '';

  @Column()
  thumbnailURL: string;

  @Column()
  tableOfContents: number;

  @Column()
  visible: boolean;

  @Column()
  publishDate: Date;
}
