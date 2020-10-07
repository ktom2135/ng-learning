export class Stock {
    public favorite: boolean = false;
    private diff: number;
    public largeChange: boolean;
    public stockClass;
    public destroy: boolean;
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number) {
        this.diff = (this.price - this.previousPrice) - 1;
        this.largeChange = Math.abs(this.diff) > 0.01;
        this.stockClass = {
            "positive": this.isPositiveChange(),
            "negative": !this.isPositiveChange(),
            "large-change": this.largeChange,
            "small-change": !this.largeChange
        }
        this.destroy = false;
    }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }

    toggleFavorite(event) {
        console.log('We are toggling the favorite state for this stock', event);
        this.favorite = !this.favorite;
    }
}
