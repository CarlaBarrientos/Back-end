export default interface IRepository<T>{
    get(entity: T): Promise<T>;
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
}