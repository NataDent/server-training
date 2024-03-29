import { Column, Model } from 'sequelize-typescript';
import { Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}
