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
        fetch('http://52.91.140.26/a.json')
            .then(res => res.json())
            .then((data) => {
				 console.log(data);
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;
