import React from 'react';
import Post from './Post'
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return (
            this.props.posts.map((post) => {
                return <Post data={post} key={post.id}/>;
            })
        );
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPostsAndUsers : fetchPostsAndUsers})(PostList);