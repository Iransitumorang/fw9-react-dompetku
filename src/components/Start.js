// import React, { Component } from 'react'

// class Start extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       dataApi:[]
//     }
//   }

//   componentDidMount() {
    
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(res => {
//       this.setState({
//         dataApi: res
//       })
//     })
//   };

// render(){
//     return (
//         <div><p>Start Api</p>
//         {this.state.dataApi.map((tes, index) => 
//           {
//             return(
//               <div key={index}>
//                 <p>{tes.body}</p>
//               </div>)
//           })}
//           </div>
//         );
//     };
// }

// export default Start

import React, { Component } from 'react'
import axios from 'axios';

class Start extends Component {
  constructor(props){
    super(props);
    this.state={
      dataApi:[],
      edit: false,
      dataPost: {
        id: 0,
        title: '',
        body: ''
      }
    };
    this.handleRemove=this.handleRemove.bind(this);
    this.inputChange=this.inputChange.bind(this);
    this.onSubmitForm=this.onSubmitForm.bind(this);
  }

  reloadData(){
      axios.get('http://localhost:3004/posts').then(res => {
       this.setState({
         dataApi: res.data
       })
      })
  }

  handleRemove(e){
    console.log(e.target.value);
    fetch(`http://localhost:3004/posts/${e.target.value}`, {method:"DELETE"}).then(res => this.reloadData());
  }

  inputChange(e){
    let newdataPost = { ...this.state.dataPost };
    if (this.state.edit === false){
      newdataPost["id"] = new Date().getTime();
    }
    newdataPost[e.target.name] = e.target.value;

    this.setState({
      dataPost : newdataPost
    }, () => console.log(this.state.dataPost))
  }

  clearData = () => {
    let newdataPost = {...this.state.dataPost};
      
      newdataPost['id']= "";
      newdataPost['body']= "";
      newdataPost['title']= "";

      this.setState({
        dataPost : newdataPost
      });
  }

  onSubmitForm = () => {
    if(this.state.edit === false){
    axios.post('http://localhost:3004/posts', this.state.dataPost).then(() => {
      this.reloadData();
      this.clearData();
     })
    } else {
      axios.put(`http://localhost:3004/posts/${this.state.dataPost.id}`, this.state.dataPost).then(() => {
        this.reloadData();
        this.clearData();
      })
    }
  }

  getDataId = (e) => {
    axios
    .get(`http://localhost:3004/posts/${e.target.value}`)
    .then(res => { 
      this.setState ({
      dataPost: res.data,
      edit: true
    })
  })
  };

  componentDidMount() {
  //  axios.get('http://localhost:3004/posts').then(res => {
  //   this.setState({
  //     dataApi: res.data
  //   })
  //  })

  this.reloadData()
  }

render(){
    return (
        <div className='m-5'><h3>Start Api</h3>
        <input type='text' name='body' placeholder='Masukkan body' value={this.state.dataPost.body} onChange={this.inputChange}/>
        <input type='text' name='title' placeholder='Masukkan title' value={this.state.dataPost.title} onChange={this.inputChange}/>
        <button type='submit' onClick={this.onSubmitForm} className='btn btn-primary m-3'>Save Data</button>
        {this.state.dataApi.map((tes, index) => 
          {
            return(
              <div key={index}>
                <h3>{tes.body}</h3>
                <button className='btn btn-warning mb-3' value={tes.id} onClick={this.handleRemove}>Delete</button>
                <button className='btn btn-danger mb-3' value={tes.id} onClick={this.getDataId}>Edit Data</button>
              </div>)
          })}
          </div>
        );
    };
}

export default Start