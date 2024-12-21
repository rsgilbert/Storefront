export interface Item {
    Id: string,
    Description: string,
    DetailedDescription: string,
    UnitPrice: number;
    Model: string,
    Pictures: ItemPicture[]
}

export type ItemRecord = Item;

export interface ItemPicture {
    "PictureUrl": string,
    "ItemId": string
}
export interface CreateCartItem {
    ItemId: string,
    Quantity: number 
}

export interface CartItem {
    Id: string,
    ItemId: string,
    ItemUnitPrice: number;
    ItemQuantity: number;
    ItemDescription: number;
    ItemPictureUrl: string 
}

export type Cart  = CartItem[]