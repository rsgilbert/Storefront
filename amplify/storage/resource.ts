import { defineStorage } from "@aws-amplify/backend";

export const itemPicturePrefix = 'item-pictures/'
export function itemPictureLocationFor(filename: string ) {
    return `${itemPicturePrefix}${filename}`
}
export const storage = defineStorage({
    name: 'pictures',
    access: (allow) => ({
        [itemPictureLocationFor('*')]: [
            allow.guest.to(['read', 'delete', 'write'])
        ]
    })
})