import React, { Component} from 'react';

//React-bootstrap import
import ProgressBar from 'react-bootstrap/ProgressBar'





class ProfileCreate extends Component {
    //create a state 
    state = {
    prefix:'',
	first_name:'',
	last_name:'',
    age:'',
    hiamft_member_account_info:'',
	language_id:''
    }

    "zip_code" INT,
	
	
	"license_state" VARCHAR(50),
	"license_expiration" VARCHAR(50),
	
	"supervision_status" VARCHAR(255),
	"fees" VARCHAR(255),

    //take in the information from the input
    handleInputChangeFor = propertyName => (event) =>{
        this.setState({
          [propertyName]:event.target.value
        })
      } 
    //upload all the inputs into the members table
    addMembers = (event) =>{
     event.preventDefault();
     this.props.dispatch({
         type:'ADD_MEMBER',
         payload:{
            prefix:'',
            first_name:'',
            last_name:'',
            age:'',
         }
     })
    }
    
     handleNext = (event) => {
        event.preventDefault ()
        this.props.history.push('/contact-info')
    
    }
    render (){
        return (
            <>
            <div className='container'>
         <header><h1>Create New Profile</h1></header>
         <br/>

        <ProgressBar now={25} />

         <form onSubmit={this.addMembers}>
         <h3>Basic Info</h3>
         <label>Prefix</label>
         <br/>
         <input type="text"
                  name="prefix"
                  value={this.state.prefix}
                  onChange={this.handleInputChangeFor("prefix")}/><br/>
         <label>First Name</label>
         <br/><input type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChangeFor("first_name")}/><br/>
         <label>Last Name</label><br/><inpu type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChangeFor("last_name")}t/><br/>
         <label>Age</label><br/><input type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleInputChangeFor("age")}/>
         <label>Language Spoken</label><br/><select><option value='' defaultValue='Select a language'>Select a language</option></select>
        <br/>
        <br/>
        <button>+</button><label>Add a Field</label>
        <br/>
        <br/>
        <label>About You</label>
        <br/>
        <textarea type="text"
                  name="hiamft_member_account_info"
                  value={this.state.hiamft_member_account_info}
                  onChange={this.handleInputChangeFor("hiamft_member_account_info")}/>
        <br/>
        <button>Save</button>
         </form>
         <button onClick={this.handleNext}>Save and Next Page</button>
            </div>
            </>
        )
    }
}

export default ProfileCreate;