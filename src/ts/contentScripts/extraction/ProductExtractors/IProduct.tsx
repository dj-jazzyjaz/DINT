export interface IPrice {
    getPrices(): Object;
}

export abstract class IProduct {
    private name: null | string;
    private description: null | string;
    private category: null | string[];
    private image: null | string;
    private prices: IPrice;

    constructor() {
        this.name = this.setName();
        this.description = this.setDescription();
        this.category = this.setCategories();
        this.prices = this.setPrices();
        this.image = this.setImage();
    }

    protected abstract setName(): null | string;
    protected abstract setDescription(): null | string;
    protected abstract setCategories(): null | string[];
    protected abstract setImage(): null | string;
    protected abstract setPrices(): IPrice;

    getName() {return this.name; }
    getDescription() { return this.description; }
    getCategory() { return this.category; }
    getImage() { return this.image; }
    getPrices() { return this.prices; }


    getProduct() {
        return {
            name: this.getName(),
            description: this.getDescription(),
            category: this.setCategories(),
            prices: this.prices.getPrices()
        }
    }
}