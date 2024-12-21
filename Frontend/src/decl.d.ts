interface Item {
    Id: string,
    Description: string,
    DetailedDescription: string,
    UnitPrice: number;
    Model: string,
    Pictures: ItemPicture[]
}

interface ItemPicture {
    "PictureUrl": string,
    "ItemId": string
}