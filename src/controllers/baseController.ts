export interface BaseController {
    getAll(): any;
    getByID(id: number): any;
    create(object: object): any;
    update(id: string, object: object): any;
    delete(id: number): any;
}