export class InvalidInput extends Error {
    constructor(parameters) {
        super(parameters);
        this.name = 'InvalidInput';
        this.message = 'Invalid input';
    }
}