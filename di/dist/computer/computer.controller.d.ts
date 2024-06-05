import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
export declare class ComputerController {
    private cpuServices;
    private diskServices;
    constructor(cpuServices: CpuService, diskServices: DiskService);
    run(): {};
}
