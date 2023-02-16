import React from 'react'
import style from './appstyle.module.css'


class Panel extends React.Component {
  handleSelect(e) {
    this.props.Select(e);
  }

  handleFilter(e){
    this.props.Filtertext(e);
  }

  render() {
    return (
      <div>
        <p>Search :
          <input type='text' placeholder='Search Products Here' onChange={(e)=>{this.handleFilter(e)}}></input></p>
        <label>
          <input type='checkbox' id='OnStock' onClick={(e) => this.handleSelect(e)}></input>
          Only Select on stocks</label>
      </div>
    )
  }
}

class TableContents extends React.Component {
  render() {
    // let's take only types of categories
    let isOn = this.props.isStocked;
    let lastChild = null;
    let Filtert = this.props.Ftext;
    console.log(Filtert, 'i am in render runing');
    const itemInfo = []

    let index = 1;
    this.props.data.forEach((array) => {
      if (array.name.indexOf(Filtert) !== -1){
        if (array.stocked == isOn) {
          if (array.category !== lastChild) {
            lastChild = array.category;
            itemInfo.push(
              <tr key={index * 100}>
                <th colSpan='2' className={style.border}>{array.category}</th>
              </tr>
            )
          }
  
          itemInfo.push(
            <tr key={index}>
              <td>{array.name}</td>
              <td>{array.price}</td>
            </tr>
          )
          index++;
        }
      }
      
      
    })

    return (
      itemInfo
    )
  }
}


class Table extends React.Component {
  render() {
    return (
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <TableContents data={this.props.data}  isStocked={this.props.isStocked} Ftext= {this.props.FilterText}/>
        </tbody>
      </table>
    )
  }
}


class ShowCase extends React.Component {
  constructor(){
    super();
    this.state = {
      isStocked: "",
      FilterText: "",
        }
  this.changeStocked = this.changeStocked.bind(this);
  this.changedFilter = this.changedFilter.bind(this);
  }

  changeStocked(e){
    this.setState(
      {isStocked: e.target.checked}
      );
  }

  changedFilter(e){
    this.setState({FilterText: e.target.value});
  }
  

  render() {
    const info =
      [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: true, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: false, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: true, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
        { category: "Electronics", price: "$199.99", stocked: false, name: "Nexus 7" },
      ]

    const DivStyle = {
      backgroundColor: 'grey',
      border: '1px solid black',
      display: 'inline-block',
      padding: '10px'
    }

    return (
      <center>
        <div style={DivStyle}>
          <Panel Select={this.changeStocked} Filtertext = {this.changedFilter}/>
          <Table data={info} isStocked={this.state.isStocked} FilterText = {this.state.FilterText} />
        </div>
      </center>
    );
  }
}

function TableStockApp() {
  return (
    <div>
      <h1 className='text-light' style={{ textAlign: 'center' }}>Employees information</h1>
      <ShowCase />
    </div>
  )
}

export default TableStockApp;




