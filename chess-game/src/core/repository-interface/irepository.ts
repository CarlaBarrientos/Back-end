export default interface IRepository<T>{
    create(): Promise<T>;
}