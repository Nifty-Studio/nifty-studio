import clapperBoard from '../../assets/clapper-board.svg';

const INITIAL_STATE = {
    sections: [
        {
            title: "productions",
            imageUrl: clapperBoard,
            id: 1,
            linkUrl: "shop/productions"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer