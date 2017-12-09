import React, { Component } from 'react';
import GraphView from 'react-digraph';
import logo from './logo.svg';
import Graph from './Graph.js';
import './App.css';
import './bttn.min.css';



class App extends Component {
  panelVisible=false; 
  
  constructor(){
    super();
    this.state={
      paneau:  <div id="actions" class="panel" >
      <p id="draw" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
      <p id="examples" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
      <p id="dfs" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
      <p id="bfs" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
      <p id="bridge" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
      <p id="twostat" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Draw Graph</p> 
     
      </div>,
      isDraw: false,

    popCreation:{
    "display": "none",
          }
  }
    this.switchPanel=this.switchPanel.bind(this);
    this.toggleDraw=this.toggleDraw.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TPGO </h1>
          <h1 className="App-title"> Theorie des Graphes </h1>
        </header>

        <div class="lateral" onClick={ this.switchPanel }>
        <div id="actions-hide" class="panel-hide"><img src="https://visualgo.net/img/arrow_white_right.png" alt=">" title="show/hide actions panel" class="rotateRight"/></div>
        </div>
          {this.state.paneau}
        <div id="graphical">
                <p style={ this.state.popCreation } class="popup"> Mode Création ...</p>
               <Graph  Ondroite={ this.afficher  } isModifiable={this.state.isDraw} />
        </div>
    
        </div>
     

    );
  }
  afficher(){
    alert("aqli di l parent");
  }
  toggleDraw(){
  
    console.log(this.state.isDraw);
    this.setState({ 
      paneau: this.state.paneau,
       isDraw: !this.state.isDraw,
        popCreation:{
      "display": this.state.isDraw? "none":"inline",
        }})
  }
  switchPanel(){
       if(this.state.paneau===null){
         this.setState({paneau: <div id="actions" class="panel" >
         <p id="draw" class="bttn-fill bttn-md bttn-primary" onClick={this.toggleDraw }>Dessiner un graph</p> 
         <p id="examples" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()"> Exemple de graph </p> 
         <p id="dfs" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()"> Algo DFS </p> 
         <p id="bfs" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Algo BFS</p> 
         <p id="bridge" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()"> Clique </p> 
         <p id="twostat" class="bttn-fill bttn-md bttn-primary" onclick="drawGraph()">Autre</p> 
  
         </div>})
      
       }
       else{
        this.setState({paneau:null})
      }
      this.forceUpdate();
     
  }

  // 
}
export default App;
