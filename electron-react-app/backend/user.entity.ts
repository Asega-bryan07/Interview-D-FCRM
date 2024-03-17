import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  residence: string;
}
