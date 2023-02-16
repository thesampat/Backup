import React from 'react'
import Fromstyle from './Panel.css'

export class MyForm extends React.Component {
    constructor(pro) {
        super(pro)
        this.piece = [];
        this.show = this.show.bind(this);
        this.getImageT = this.getImageT.bind(this);
        this.image = '';
    }

    getImageT(e) {
        e.preventDefault();
        this.image = e.target.id;
    }

    show(e) {
        e.preventDefault();
        let title = e.target[0].value;
        let desc = e.target[1].value;
        let note = e.target[2].value;
        let backimg = this.image;
        this.piece.push(title, desc, note, backimg);

        this.props.fun(this.piece);

        this.piece = [];
    }

    getshowtext(e){
        let filteredtext = e.target.value;
        this.props.getFilteredText(filteredtext);
    }





    render() {
        return (
            <div classNameName="superContainer">
                <div classNameName="container" style={{backgroundColor:'black', borderRadius:'20px'}}>
                    <div classNameName="header">
                        <h1 style={{color:'white'}}>NotesPro</h1>
                        <div classNameName="searchbar">
                            <i classNameName="material-icons">search</i>
                            <input type="text" name="search" id="search" placeholder='Search' onChange={(e)=>this.getshowtext(e)} defaultValue=''/>
                        </div>


                    </div>

                    {<form onSubmit={this.show} method=''>
                        <div classNameName="formContainer" style={Fromstyle}>
                            <div>
                                <label style={{color:'white'}} htmlFor='ntitle'>Title:</label>
                                <input type="text" id="ntitle" placeholder='Title' />
                            </div>
                            <div>
                                <label style={{color:'white'}} htmlFor='ndesc'>Description:</label>
                                <input type="text" id="ndesc" placeholder='Description' />
                            </div>
                            <div>
                                <label style={{color:'white'}} htmlFor='nnote'>Note:</label>
                                <textarea rows='4' id="nnote" placeholder='Plese Enter Note Here' />
                            </div>
                            <div><label style={{color:'white'}}>Select image: </label></div>
                            <div>
                            <div classNameName="imagesMain">
                                {/* <img src="./images/astronaut.png" alt="img"/> */}
                                <button classNameName='imagess' style={{
                                    backgroundImage: 'url("images/astronaut.png")',
                                    backgroundSize: 'cover', backgroundPosition: 'center'
                                }}
                                    onClick={this.getImageT} id='0' />
                    
                                <button classNameName='imagess' style={{
                                    backgroundImage: 'url("images/ButterFly.jpg")',
                                    backgroundSize: 'cover', backgroundPosition: 'center'
                                }}
                                    onClick={this.getImageT} id='1' />

                                <button classNameName='imagess' style={{
                                    backgroundImage: 'url("images/gnome.jpg")',
                                    backgroundSize: 'cover', backgroundPosition: 'center'
                                }}
                                    onClick={this.getImageT} id='2' />  
                            </div>
                        </div>
                        <div>
                            <button type="submit" id='submit' style={{fontFamily:'system-ui',backgroundColor:'skyblue', padding:'3px', color:'black', fontWeight:'bold', fontSize:'1.3em'}}>Add Note</button>
                        </div>
                        </div>
                    </form>

                    }
                </div>
            </div>

        )
    }
}

class Panel extends React.Component {
    render() {
        return null;
    }
}

export default Panel