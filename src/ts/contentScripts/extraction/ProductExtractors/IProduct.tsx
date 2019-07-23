export interface IPrice {
    getPrices(): Object;
}

export abstract class IProduct {
    private name: null | string;
    private description: null | string;
    private prices: IPrice;

    constructor() {
        this.name = this.setName();
        this.description = this.setDescription();
        this.prices = this.setPrices();
    }

    abstract setName(): null | string;
    abstract setDescription(): null | string;
    abstract setPrices(): IPrice;

    getName() {return this.name; }
    getDescription() { return this.description; }
    getPrices() { return this.prices; }

    getProduct() {
        return {
            name: this.name,
            description: this.description,
            prices: this.prices.getPrices()
        }
    }
}