const initialState = {
    sentiment: '',
    confidence: 0,
};

const sentimentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_REVIEW':
            return {
                ...state,
                sentiment: action.payload.sentiment,
                confidence: action.payload.confidence,
            };
        default:
            return state;
    }
};

export default sentimentReducer;