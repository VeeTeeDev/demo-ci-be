import { Controller, Get, Post, Request, Response, Param, Query, Body, HttpStatus } from '@nestjs/common';
import { CCsService } from './ccs.service';
import { CC } from './models/CC.model';

@Controller('ccs')
export class CCsController {

    constructor(private _ccsService: CCsService) {
    }

    @Get()
    async getAllCCs(@Response() res) {
        const ccs = await this._ccsService.getAllCCs();
        res.status(HttpStatus.OK).json(ccs);
    }

    @Get('/search')
    async searchCCs(@Response() res, @Query('needle') searchString) {
        let filtered = this._ccsService.searchCCs(searchString);
        res.send(JSON.stringify(filtered));
    }

    @Get('/:id')
    async getCC(@Response() res, @Param('id') id) {
        const cc = await this._ccsService.getCC(+id);
        res.status(HttpStatus.OK).json(cc);
    }
}
