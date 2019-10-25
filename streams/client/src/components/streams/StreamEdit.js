import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(formValues, this.props.match.params.id);
    }

    render() {
        if (!this.props.stream)
            return <div>Loading...</div>;

        const { title, description } = this.props.stream;

        return (
            <div>
                <h2>Edit a Stream</h2>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={{
                        title: title,
                        description: description
                    }} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream: fetchStream, editStream: editStream })(StreamEdit);