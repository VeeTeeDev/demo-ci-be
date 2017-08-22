import { Module } from '@nestjs/common';
import { CCsModule } from './cc/ccs.module';

@Module({
    modules: [ CCsModule ]
})
export class ApplicationModule {
}
