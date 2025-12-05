export async function load() {

    function delay(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    interface Product {
        id: number;
        productName: string;
        productImg: string[];
        productPrice: string;
        isOnSale: boolean;
        productOrder: number;
    };

    const products: Product[] = [
        {id: 1, productName: "LuxeCarry Tote", productImg: ["/images/tote.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "200", isOnSale: false, productOrder: 1},
        {id: 2, productName: "UrbanEdge Backpack", productImg: ["/images/backpack.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "500", isOnSale: false, productOrder: 0},
        {id: 3, productName: "Velora Sling", productImg: ["/images/sling.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "1200", isOnSale: false, productOrder: 1},
        {id: 4, productName: "MetroMist Crossbody", productImg: ["/images/crossbody.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "890", isOnSale: true, productOrder: 0},
        {id: 5, productName: "Astra Mini Bag", productImg: ["/images/minibag.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "600", isOnSale: false, productOrder: 0},
        {id: 6, productName: "Solara Handbag", productImg: ["/images/handbag.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "120", isOnSale: false, productOrder: 0},
        {id: 7, productName: "NovaStride Duffel", productImg: ["/images/duffel.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "2500", isOnSale: true, productOrder: 0},
        {id: 8, productName: "Eclipse Travel Pack", productImg: ["/images/travelpack.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "340", isOnSale: false, productOrder: 0},
        {id: 9, productName: "Serenova Satchel", productImg: ["/images/satchel.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "640", isOnSale: false, productOrder: 0},
        {id: 10, productName: "Marbella Shoulder Bag", productImg: ["/images/shoulderbag.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "180", isOnSale: false, productOrder: 0},
        {id: 11, productName: "Crestline Messenger", productImg: ["/images/messengerbag.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "480", isOnSale: false, productOrder: 0},
        {id: 12, productName: "OpalVine Clutch", productImg: ["/images/clutch.jpg", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260", "https://placehold.co/260x260"], productPrice: "960", isOnSale: false, productOrder: 0},
    ];
    
    //simulate fetching
    await delay(1000);

    return ({products});
}
