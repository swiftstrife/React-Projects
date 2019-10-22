import React from 'react';

class GoogleAuth extends React.Component {
    
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '969668308403-rol3gaa072hm0kkak8k88na7rsgh29rp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

    signIn = () => {
        this.auth.signIn();
    }

    signOut = () => {
        this.auth.signOut();
    }
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return(
                <button onClick={this.signOut} className="ui red google button">
                    <i className="google icon" />
                    Sign out
                </button>
            );
        } else {
            return(
                <button onClick={this.signIn} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }
}

export default GoogleAuth;