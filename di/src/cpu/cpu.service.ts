import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerServices: PowerService){}

    compute(a: number, b: number){
        console.log('Drawing a watts of supply in powerservices');
        this.powerServices.supplyPower(10);
        return a + b
    }
}
