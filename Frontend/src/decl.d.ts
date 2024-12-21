interface Item {
    No: string,
    Description: string,
    UnitPrice: number;
    Model: string,
    Pictures: ItemPicture[]
}

interface ItemPicture {
    "PictureUrl": string,
    "ItemNo": string
}