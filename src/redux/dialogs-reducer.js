const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Maks' },
        { id: 2, name: 'Dmitriy' },
        { id: 3, name: 'Sofya' },
        { id: 4, name: 'Vlad' }
    ],
    messages: [
        { id: 1, message: 'Hi honey, how are you doing???? Long time no see. Where have you been?' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'What are you doing' }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [ ...state.messages, newMessage],
            };
            default:
                return state;
    }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;