import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                        Video Search
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(event) => {
                                    this.setState( { term: event.target.value } )
                                }
                            }
                        />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;