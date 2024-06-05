import { PowerService } from 'src/power/power.service';
export declare class CpuService {
    private powerServices;
    constructor(powerServices: PowerService);
    compute(a: number, b: number): number;
}
