import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://127.0.0.1:8443/restaurant/')
            .then(res => res.json())
            .then((data) => {
				 console.log(data);
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;
