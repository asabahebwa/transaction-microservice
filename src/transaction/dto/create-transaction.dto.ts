import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';
enum Status {
  PENDING = 'PENDING',
  SETTLED = 'COMPLETED',
  FAILED = 'FAILED',
}
export class CreateTransactionDto {
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
  @IsUUID()
  @IsNotEmpty()
  accountId: string;
  @IsOptional()
  @IsString()
  description?: string;
}
