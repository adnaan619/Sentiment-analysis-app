export const submitReview = (reviewText) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:4000/api/sentiment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review: reviewText }),
        });
        const data = await response.json();
        console.log('Response data:', data);

        dispatch({
            type: 'SUBMIT_REVIEW',
            payload: data,
        });
    } catch (error) {
        console.error('Error in submitReview', error);
    }
};