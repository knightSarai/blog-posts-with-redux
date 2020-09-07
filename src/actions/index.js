import _ from 'lodash';
import jsonPlaceHolder from '../APIs/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());
        
        _.chain(getState().posts)
                .map('userId')
                .uniq()
                .forEach(id => dispatch(fetchUser(id)))
                .value()
}

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = (userId) => async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${userId}`);
        dispatch({type: 'FETCH_USER', payload: response.data})
};


// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);
// //* new memoized version of _fetchUser
// const _fetchUser = _.memoize( async (userId, dispatch) => {
//         const response = await jsonPlaceHolder.get(`/users/${userId}`);
//         dispatch({type: 'FETCH_USER', payload: response.data});
// });
