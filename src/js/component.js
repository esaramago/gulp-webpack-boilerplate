export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Method
    calculateArea() {
        return this.height * this.width;
    }
}