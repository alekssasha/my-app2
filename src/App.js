import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 27,
	  text: "+++",
	  position: ""
    }
  }

  nextYear = () => {
	  this.setState(state => ({
		year: state.year + 1 
	}))
  }

  commitInputChanged = (e, clor) => {
	  console.log(clor);
	  this.setState({
		  position: e.target.value
	  })
  }

  render() {
    const {name, surname, link} = this.props;
	const {year, position} = this.state;
	
    return (
      <div>
		<button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, 
			surname - {surname}, 
			age - {year}, 
			position - {position}</h1>
        <a href={link}>Ny profile</a>
		<form>
			<span>Введите должность</span>
			<input type="text" onChange={(e) => this.commitInputChanged(e, 'some color')}/>
		</form>
      </div>
   )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name= "Jhon" surname="Smith" link="facebook.com"/>
      <WhoAmI name= "Aleks" surname="Shepard" link="vk.com"/>
    </div>
  );
}

export default App;
