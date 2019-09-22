import React, {useEffect, useRef, useContext} from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const classes = [];
  let btnClass = '';
  //const authContext = useContext(AuthContext);

  //console.log(authContext.authenticated);
  // const toogleBtnRef = useRef(null);
  
  // useEffect(() => {
  //   toogleBtnRef.current.click();

  //   return () => {
  //     console.log('[Cockpit.js] useEffect');
  //   }

  // }, []);

  if(props.showPersons) {
    btnClass = styles.Red;
  }

  if(props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if(props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <p className={classes.join(' ')}>React is cool</p>
      <button
        // ref={toogleBtnRef}
        className={btnClass}
        onClick={props.toggle}>Toogle Persons
      </button>
      {/* <button onClick={authContext.login}>Log in</button> */}
    </div>
  )
}

export default React.memo(cockpit);