import { PartialType } from '@nestjs/mapped-types';
import { CreateDulceDto } from './create-dulce.dto';

export class UpdateDulceDto {
  id: number;
  nombre: string;
  marca: string;
  sabor: string;
  cantidad: number;
}
