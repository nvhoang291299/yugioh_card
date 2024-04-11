import { plainToInstance } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class TypeOrmVariables {
  
  @IsNumber()
  PORT: number;

  @IsString()
	@IsNotEmpty()
	MYSQL_TYPE: string;

	@IsString()
	@IsNotEmpty()
	MYSQL_HOST: string;

	@IsNumber()
	@IsNotEmpty()
	MYSQL_PORT: number;

	@IsString()
	@IsNotEmpty()
	MYSQL_USERNAME: string;

	@IsString()
	@IsNotEmpty()
	MYSQL_PASSWORD: string;

	@IsString()
	@IsNotEmpty()
	MYSQL_NAME: string;

    @IsBoolean()
    MYSQL_SYNCHRONIZE: boolean;
  }
  
  export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(
      TypeOrmVariables,
      config,
      { enableImplicitConversion: true },
    );
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  
    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  }