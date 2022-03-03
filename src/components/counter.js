import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className='jumbotron'>
            <h2 id="counter">{counter}</h2>
            <button
                onClick={dec}
                id="dec" className="btn btn-primary btn-lg">
                DEC
            </button>
            <button
                onClick={inc}
                id="inc" className="btn btn-primary btn-lg">
                INC
            </button>
            <button
                onClick={rnd}
                id="rnd" className="btn btn-primary btn-lg">
                RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

const mapDispatchtoProps = (dispatch) => {

    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.ceil(Math.random() * 10);
            rnd(randomValue);
        }
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);