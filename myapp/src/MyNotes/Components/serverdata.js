import Main from "../NoteApp"
import { Note } from "./note"
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { createContext } from "react"
import axios from "axios"

export const globalContext = createContext();

const backimage = ['astronaut.png', 'ButterFly.jpg', 'gnome.jpg'];

export class GlobalContextProvider extends React.Component {

    constructor() {
        super()
        this.state = {
            data: {
                'title': ['Shopping', 'Homework', 'Location'],
                'desc': ['shop 3 things', 'Don"t want to be beated', 'Reach house soon'],
                'note':['Chicken,Noodles,Ice_Cream', 
                        'Maths, Science, Coding',
                        'East, West, North'],

                'backimg': ['astronaut.png', 'ButterFly.jpg', 'gnome.jpg'],
                "id": [],
            }, 
        }
        
        this.getData = this.getData.bind(this);
        this.getserverdata = this.getserverdata.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }


    // componentDidMount=()=>{
    //         axios.get('http://localhost:3008/notes').then(
    //             res => this.getserverdata(res.data))

    // }

    getserverdata=(data)=>{
        let ndata = {...this.state.data};

        if(this.state.data['title'].length === 0){
        for(let notes of data){
            ndata.title.push(notes['title']);
            ndata.desc.push(notes['desc']);
            ndata.note.push(notes['note']);
            ndata.backimg.push(backimage[notes['backimg']]);
            ndata.id.push(notes['id']);

        }

        this.setState({data: ndata});
        }
        
    }

    changeserverdata(ndata, request, id=0){
            if(request === 'create'){

            let payload = {
                "title" : ndata[0],
                "desc" : ndata[1],
                "note" : ndata[2],
                "backimg" : ndata[3], 
            }

            const res = axios.post('http://localhost:3008/notes', payload);
            return res
        }
        
        if(request === 'delete'){
            axios.delete(`http://localhost:3008/notes/`+id)
        }

        if(request === 'put'){

            let payload = {
                "title" : ndata[0],
                "desc" : ndata[1],
                "note" : ndata[2],
            }
            axios.put(`http://localhost:3008/notes/`+id, payload);
        }

        }


    getData = (FreshData) => {
        const new_data = { ...this.state.data };
         if (FreshData[3] === ''){
            FreshData[3] = 0;
        }

        let fetched = this.changeserverdata(FreshData, 'create');
        fetched.then(res=>new_data['id'].push(res.data.id))

        new_data['title'].push(FreshData[0]);
        new_data['desc'].push(FreshData[1]);
        new_data['note'].push(FreshData[2]);
        new_data['backimg'].push(backimage[FreshData[3]]);


        this.setState({
            data: new_data
        });

        

    }

    editData = (e, serverindex, editedData) => {
        const new_data = { ...this.state.data };

        new_data['title'][e] = editedData[0];
        new_data['desc'][e] = editedData[1];
        new_data['note'][e] = editedData[2];

        
        this.setState({
            data: new_data
        });


        this.changeserverdata(editedData, 'put', serverindex);

    }

    deleteData = (e) => {
        const new_data = { ...this.state.data };
        delete new_data['title'][e];
        delete new_data['desc'][e];
        delete new_data['note'][e];


        this.setState({
            data: new_data
        });

        
        this.changeserverdata(null, 'delete', new_data['id'][e]);

    }



    render() {
        const noteurl = [];
        this.state.data['title'].map((el, index)=>{
            return(
                noteurl.push(
                    <Route key={index} path={'/note'+index} element={<Note />}></Route>
            )
            )})
                        
        return (
            <React.Fragment>
                <globalContext.Provider value={{'data': this.state.data, 'images':this.backimages, 'add': this.getData, 'del': this.deleteData, 'edit':this.editData}}>
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        {noteurl}
                    </Routes>
                </globalContext.Provider>
            </React.Fragment>

        )
    }
}