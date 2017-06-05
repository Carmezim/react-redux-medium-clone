import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import reducer from './checkbox/checkbox';


const store = createStore(reducer);

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		store.subscribe(() => this.setState(store.getState()));
	}

  render() {
		const onClick = () => store.dispatch({ type: 'TOGGLE' });
    return (
			<div>      
				<h1>To-dos</h1>
				<div>
					Learn Redux
					<input 
						type="checkbox"
						checked={!!this.state.checked}
						onClick={onClick} />
				</div>
				{ this.state.checked ? (<h2>Done!</h2>) : null }
			</div>
    );
	}
}
ReactDOM.render((
  <App />
), document.getElementById('root'));
