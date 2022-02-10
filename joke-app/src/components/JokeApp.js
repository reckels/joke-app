import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }

    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev';
            fetch(url)
                .then(response => response.json())
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value,
                        isLoading: false
                    }, () => {
                        console.log('New joke stored')
                    })
                });
        })
    }
}

export default JokeApp;