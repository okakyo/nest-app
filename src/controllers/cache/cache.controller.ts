import { Controller, Get } from '@nestjs/common';

@Controller('cache')
export class CacheController {
    @Get("/:userId")
    getCacheByUserId(){

    }
}
