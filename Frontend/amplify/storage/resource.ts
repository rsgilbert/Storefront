import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: 'pictures',
    access: (allow) => ({
        'item-pictures/*': [
            allow.guest.to(['read', 'delete', 'write'])
        ]
    })
})