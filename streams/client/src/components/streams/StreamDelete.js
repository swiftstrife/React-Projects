import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        const title = this.props.stream ? ` (${this.props.stream.title})` : "";
        return (
            <Modal 
                title="Delete Stream"
                message={`Are you sure you want to delete this stream${title}?`}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        )
    }

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={this.removeStream} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    removeStream = () => {
        this.props.deleteStream(this.props.match.params.id);
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchStream: fetchStream, deleteStream: deleteStream })(StreamDelete);