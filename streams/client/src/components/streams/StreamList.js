import React from 'react';
import StreamEntry from '../StreamEntry'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }
    
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.getStreamList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create stream
                    </Link>
                </div>
            );
        }
    }

    getStreamList = () => {
        return this.props.streams.map(stream => {
            const correctUser = stream.userId === this.props.currentUserId;
            return <StreamEntry stream={stream} correctUser={correctUser} key={stream.id} />;
        });
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList);