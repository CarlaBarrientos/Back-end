export default interface IRepository<T>{
    create(entity: T): Promise<T>;
    update(id: string, entity: T): Promise<T>;
}