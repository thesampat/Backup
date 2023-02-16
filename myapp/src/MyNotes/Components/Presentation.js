import React from 'react'
import {Link } from 'react-router-dom'
import { createContext } from 'react'

export const GlobalContext = createContext();

export class CardContents extends React.Component {
    constructor(){
        super()
        this.state={
            filtertext : ''
        }
    }

    handleDelete(e, spkey) {
        let deletid = e.target.id;
        this.props.deldata(deletid);
    }


    
    render() {
        {console.log(this.props.filteredText)}
        let data = this.props.data;
        const notec = [];
        this.props.data['title'].forEach((notes, index) => {
            if(data['title'][index] !== null || data['desc'][index] !== null || data['note'][index] !== null){
            if (data['note'][index].indexOf(this.props.filteredText) !== -1){
            notec.push(
                <div classNameName='pcontainer' key={index} style={{backgroundColor:'rgb(244 255 255 / 47%)'}}>
                    <h2>{data['title'][index]}</h2>
                    <h3 >{data['desc'][index]}</h3>
                    <img src={'./images/'+data['backimg'][index]} alt="noteimg" />
                    <p>{data['note'][index]}</p>
                    <div classNameName="buttoncon">

                        <Link to={'note'+index} state={{title: data['title'][index], 
                                                 desc: data['desc'][index],
                                                 note: data['note'][index],
                                                 imgp: data['backimg'][index],
                                                 serverindex: data['id'][index],
                                                 noteindex: index }}>
                                                    
                            <button classNameName="open" style={{padding:'0.3em'}}>Open</button>
                        </Link>

                        <button id={index} onClick={(e) => {this.handleDelete(e)}} classNameName="delete" style={{padding:'0.3em'}}>Delete</button>
                    </div>
                </div>
            )}
        }
        })
        return (   
                <React.Fragment>
                {notec}
                </React.Fragment>      
        )
    }

}


