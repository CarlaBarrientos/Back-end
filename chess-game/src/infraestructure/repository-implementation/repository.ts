import { injectable } from "inversify";
import IRepository from '../../core/repository-interface/irepository';

@injectable()
//export default class Repository<TDomainEntity, TDalEntity> implements IRepository<TDomainEntity> {
    export default class Repository<TDomainEntity> implements IRepository<TDomainEntity> {
    public async create(): Promise<TDomainEntity> {
        throw new Error("Method not implemented.");
    }
}