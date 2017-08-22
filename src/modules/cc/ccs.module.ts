import { Module } from '@nestjs/common';
import { CCsController } from "./ccs.controller";
import { CCsService } from './ccs.service';

@Module({
    controllers: [ CCsController ],
    components: [ CCsService ]
})
export class CCsModule {}
