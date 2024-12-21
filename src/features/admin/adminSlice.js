import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    itemlist: [
        {
            id: "1",
            name: "Mix Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/7EB91210-25AE-4EE5-B60E-56599ED8A714.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/F4033A57-0473-4014-B35B-AE70561DB6D8.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/E4936DBC-904B-4EF4-806F-A2D4A34628A2.jpeg",
            
            ]
        },
        {
            id: "2",
            name: "Cactus iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/6EA378FA-085E-45A7-8CD7-4FBAB5DC20FB.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/5C8FF7C3-F922-47F5-9608-BE62BAAC2594.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/B0A59ABD-E3B9-4781-A647-C628CE28FD0B.jpeg",
            ]
        },
        {
            id: "3",
            name: "Mix Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/C426E3F1-FAA4-46A1-B5BE-8E9FC6A4AA25.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/1AA62C90-ADAD-4EBB-BFBA-C54AA67961F4.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/5BEFB705-5F35-4007-A338-AE193E5C20F0.jpeg",
            ]
        },
        {
            id: "4",
            name: "Mix Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/7EB91210-25AE-4EE5-B60E-56599ED8A714.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/F4033A57-0473-4014-B35B-AE70561DB6D8.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/E4936DBC-904B-4EF4-806F-A2D4A34628A2.jpeg",
            ]
        },
    ]
}


const itemlistSlice = createSlice({
    name: "itemlist",
    initialState,
    reducers: {
        
    }
})

export const {  } = itemlistSlice.actions
 
export default itemlistSlice.reducer

export const selectAllItems = state => state.itemlist.itemlist

export const selectItem = (state, id) => state.itemlist.itemlist.find(item => item.id === id)




