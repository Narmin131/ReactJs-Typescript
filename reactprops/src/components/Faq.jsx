import React, { Component } from 'react';
import Question from './Question';
import bg from '../assets/img/bg1.png';

class Faq extends Component {
    render() {
        return (
            <section className='faq' style={{backgroundImage: `url(${bg})`}}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center ">
                            <p>QUESTIONS  ANSWERS</p>
                            <h1>FREQUENTLY ASKED QUESTIONS</h1>
                        </div>
                        <div className="col-lg-8">
                            <Question  title={"What is MiNFT?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={"one"} collapse={"bir"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"How we can buy and invest NFT ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={"two"} collapse={"iki"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"Why we should choose MiNFT ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={"three"} collapse={"uc"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"Why we should choose MiNFT ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={'four'} collapse={"dord"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"Where we can buy and sell NFts ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={'five'} collapse={"bes"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"How secure is this token ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={'six'} collapse={"alti"}/>
                        </div>
                        <div className="col-lg-8">
                        <Question  title={"What is your contract address ?"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} id={'seven'} collapse={"yeddi"}/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}


export default Faq;