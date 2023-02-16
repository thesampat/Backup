import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './note.css'
import React from 'react'
import {useState} from 'react'
import { useContext } from "react";
import { globalContext } from "./serverdata";

export function Note() {

    const editcon = useContext(globalContext);
    const navigateBack = useNavigate();
    const d1 = useLocation();
    let { title, desc, note, imgp, serverindex, noteindex } = d1.state;

    const [edit, setedit] = useState(true);
    const [edittitle, settitle] = useState(title);
    const [editnote, setnote] = useState(note);
    const [editdesc, setdesc] = useState(desc);


    

    const seteditoOn=()=>{
        edit ? setedit(false) : setedit(true);
    }

    function edit_data(e){
        e.preventDefault();
        let edited = [edittitle, editdesc, editnote];
        editcon.edit(e.target.id, serverindex, edited);

        
        // Lets navigate to home of the page
        navigateBack(-1);
    }

    console.log(imgp)
    
    return (  
        <React.Fragment>
            <div classNameName="noteContainer" style={{backgroundColor:'#83838321'}}>     
                <form classNameName='noteform'>
 
               { edit ? 
                (<React.Fragment>
                <hr></hr>
                <h1>{title}</h1>
                <img src={'/images/'+imgp} alt="NoteImage" id='singlenote'/>
                <h3>{desc}</h3>
                <p>{note}</p>
                <hr></hr> 

                <div classNameName="controlings">
                    <button onClick={seteditoOn}>Edit</button>
                    <button onClick={(el)=>{el.preventDefault(); navigateBack(-1)}}>Back</button>
                </div>

                </React.Fragment>)

                 :   
                 
                (<React.Fragment>
                <div classNameName="edit">
                <h3 classNameName="text-light fw-bold">Edit Note</h3>
                <hr id='edithr'></hr>
                <input type='text' onChange={(e)=>{settitle(e.target.value)}} defaultValue={title} />
                <input type='text' onChange={(e)=>{setdesc(e.target.value)}} defaultValue={desc}></input>
                <textarea rows='7' onChange={(e)=>{setnote(e.target.value)}} defaultValue={note}></textarea>
                <hr id='edithr'></hr>
                <div classNameName="controlings" style={{marginTop: '10px'}}>
                    <button type="submit" id={noteindex} onClick={(e)=>{edit_data(e)}}>Save</button>
                    <button id='cancel' onClick={seteditoOn}>Cancel</button>
                </div>
                </div>
                </React.Fragment>)} 
                </form>
            </div>
        </React.Fragment>
        

    )
}