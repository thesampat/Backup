import Panel from './Components/Panel.js'
import {MyForm} from './Components/Panel.js'
import React from 'react'
import { CardContents } from './Components/Presentation.js'
import style from './Components/Presentation.css'
import { globalContext } from './Components/serverdata.js'

class Main extends React.Component{
    constructor(){
        super();
        this.state={
            filteredText: ''
        }

        this.changetext = this.changetext.bind(this);
    }

    changetext(text){
        this.setState({filteredText:text})
    }

    render(){
        return(
            <React.Fragment>
                <globalContext.Consumer>
                
               {context=>
               (
                <React.Fragment>

                <MyForm fun={context.add} getFilteredText={this.changetext}/>  
                <Panel setData={context.add}/>
                <div className="gridContainer" style={{style}}>
                    <CardContents data={context.data} deldata={context.del} filteredText ={this.state.filteredText}/>
                </div>
                
                </React.Fragment>
                )}
                </globalContext.Consumer>
            </React.Fragment>  
            )
           }
    }

export default Main


