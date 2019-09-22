import React, {Component} from 'react';
import styles from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props){
    super(props);

    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.login);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" 
          onChange={this.props.changed}
          value={this.props.name}
          //ref={(inputEl) => {this.inputElementRef = inputEl}}>
          ref={this.inputElementRef}>
        </input>
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, styles.Person);