const SET_CARD = "SET_CARD";
const UPDATE_DECK_CARD_NUM = "UPDATE_DECK_CARD_NUM";

let initial_state = {
    card : {
        suit: "hurt",
        index: "A",
    },

    deck_card_num: 36,

    cards_on_table : [
        [
            {
                suit : "hurt",
                index : 8,
            },
            {
                suit: "diamonds",
                index: "J",
            },
        ],

        [
            {
                suit : "clubs",
                index : "K",
            },
            {
                suit: "diamonds",
                index: 7,
            },
        ],
        [
            {
                suit : "hurt",
                index : 8,
            },
            {
                suit: "diamonds",
                index: "J",
            },
        ],

        [
            {
                suit : "clubs",
                index : "K",
            },
            {
                suit: "diamonds",
                index: 7,
            },
        ],
        [
            {
                suit : "hurt",
                index : 8,
            },
            {
                suit: "diamonds",
                index: "J",
            },
        ],

        [
            {
                suit : "clubs",
                index : "K",
            },
            {
                suit: "diamonds",
                index: 7,
            },
        ],

    ],

    self_layout_list: [
        {
            suit: "diamonds",
            index: 6,
        },

        {
            suit: "spaces",
            index: "K",
        },

        {
            suit: "hurt",
            index: 8,
        },

        {
            suit: "hurt",
            index: "D",
        },

        {
            suit: "spaces",
            index: 6,
        },

        {
            suit: "diamonds",
            index: "J",
        },

        // {
        //     suit: "clubs",
        //     index: "J",
        // },

        // {
        //     suit: "clubs",
        //     index: "K",
        // },
    ]

}

export const GameScreenReducer = (state=initial_state, action) => {
    switch(action.type){

        case SET_CARD:{
            return {
                ...state, card: action.card
            }
        }

        case UPDATE_DECK_CARD_NUM:{
            return{
                ...state, deck_card_num: action.deck_card_num
            }
        }

        default:
            return state;
    }
};
 
export const set_card_AC = (card) => {
    return {
        type: SET_CARD,
        card
    }
}

export const update_deck_card_num_AC = (deck_card_num) => {
    return {
        type: UPDATE_DECK_CARD_NUM,
        deck_card_num
    }
}