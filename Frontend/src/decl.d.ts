interface Item {
    Id: string,
    Description: string,
    UnitPrice: number;
    Model: string,
    Pictures: ItemPicture[]
}

interface ItemPicture {
    "PictureUrl": string,
    "ItemNo": string
}