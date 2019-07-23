export interface IPrice {
    getPrices(): Object;
}

export abstract class IProduct {
    private name: null | String;
    private description: null | String;
    private prices: IPrice;

    constructor() {
        this.name = this.setName();
        this.description = this.setDescription();
        this.prices = this.setPrices();
    }

    abstract setName(): null | String;
    abstract setDescription(): null | String;
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