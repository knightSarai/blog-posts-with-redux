import React from 'react';

import PostList from './PostList';
import Quil from './Quil';

export default function App() {
    return (
        <div className="ui container">
            <br/>
            <Quil/>
            <PostList/>
        </div>
    )
}
