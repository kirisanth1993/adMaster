import { CHANGE_ADVERTISE_LIST } from '../types';

const initalState = [
    {
        id: 0,
        title: "House in Colombo",
        category: "housing",
        description: "With the increasing demand for quality accommodation in and around Colombo, 'OPAL RESIDENCE' offering the only modern luxury boutique development with only 19 houses in 01 Acre land. (Right next to CINEC Campus) We have beautifully designed, luxurious 05 bedroom houses (4,300 sq.ft.) with 05 Bathrooms, built to the highest quality, situated close to Malabe town, highway entrance (1km) at a convenient location with many public & private institutions. All our houses are built to the highest quality with German / European fittings and expert finishes handpicked to suit elegant and modern living. Witness it to your eyes! You will never be disappointed.",
        image: "house.png",
        isFav: false
    },
    {
        id: 1,
        title: "Money Exchange",
        category: "selling",
        description: "Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. ",
        image: "money.png",
        isFav: false
    },
    {
        id: 2,
        title: "Maths Classes",
        category: "education",
        description: "Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. ",
        image: "study.png",
        isFav: false
    },
    {
        id: 3,
        title: "Get-together",
        category: "community",
        description: "Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. ",
        image: "friends.png",
        isFav: false
    },
    {
        id: 4,
        title: "CEO",
        category: "professional",
        description: "Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. ",
        image: "man.png",
        isFav: false
    },
    {
        id: 5,
        title: "Villa",
        category: "housing",
        description: "Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. ",
        image: "nextHouse.png",
        isFav: false
    },
    
];

export const AdvertiseReducer = (state=initalState, action) => {
    switch(action.type){
        case CHANGE_ADVERTISE_LIST:
            return (
                action.payload
            )
        default:
            return state;
    }
};