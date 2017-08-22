import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CC } from './models/CC.model';
var ccs = require('../../../data/jworks-ccs.json');

@Component()
export class CCsService {

    private _ccs: Array<CC> = [];

    constructor() {
        this._ccs = ccs;
    }

    public getAllCCs() {
        return Promise.resolve(this._ccs);
    }

    public getCC(id: number): CC {
        for(let itx in this._ccs) {
            if(id === this._ccs[itx].id) return this._ccs[itx];
        }
    }

    public searchCCs(searchString: string): Array<CC> {
        let needle = searchString && searchString.toLowerCase();
        if(needle) {
            let filtered = this._ccs.filter((d) => {
                return d.name.toLowerCase().indexOf(needle) > -1 ||
                       d.description.toLowerCase().indexOf(needle) > -1 ||
                       d.cl.toLowerCase().indexOf(needle) > -1 ||
                       d.tags.join().toLowerCase().indexOf(needle) > -1;
            });
            return filtered;
        } else {
            return this._ccs;
        }
    }

}
