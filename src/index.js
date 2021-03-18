import React,{ Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Example1';
//import Footer from './Example2';
import Main from './Example3';

//import './Index.css'


 class Place extends Component {
    render() {
        return (
            <Fragment>
            <Header />
            <Main />
                
            </Fragment>
        )
    }
}


ReactDOM.render(  <Place/> , document.getElementById('root'));
