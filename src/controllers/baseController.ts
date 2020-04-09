export interface BaseController {
    getAll(): any;
    getByID(id: string): any;
    create(object: object): any;
    update(id: string, object: object): any;
    delete(id: string): any;
}