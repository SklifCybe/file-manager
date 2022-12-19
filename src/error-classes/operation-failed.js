export class OperationFailed extends Error {
    constructor(parameters) {
        super(parameters);
        this.name = 'OperationFailed';
        this.message = 'Operation failed';
    }
}