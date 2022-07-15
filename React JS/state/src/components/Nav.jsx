import React, { Component } from 'react'

 class Nav extends Component {
     constructor(props){
         super(props);
         this.darkMode = this.darkMode.bind(this);
         this.lightMode = this.lightMode.bind(this);
         this.state = {
             mode:"navclass",
             link:"linkclass",
         }
     }

     darkMode(){
         this.setState({
            mode:"darkclass",
            link:"darklink",
         })
     }

     lightMode(){
        this.setState({
            mode:"navclass",
            link:"linkclass",
        })
    }
  render() {
    return (
      <nav className={this.state.mode}>
          <div className="container-fluid h-100">
              <div className="row h-100 d-flex justify-content-between">
                  <div className="col-lg-6 h-100">
                      <ul>
                          <li><a href="" className={this.state.link} >Home</a></li>
                          <li><a href="" className={this.state.link}>Shop</a></li>
                          <li><a href="" className={this.state.link}>Pages</a></li>
                          <li><a href="" className={this.state.link}>About Us</a></li>
                          <li><a href="" className={this.state.link}>Contact</a></li>
                          <li><a href="" className={this.state.link}>Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end align-items-center">
                      <button onClick={this.darkMode} >Dark</button>
                      <button onClick={this.lightMode}>Light</button>
                  </div>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav