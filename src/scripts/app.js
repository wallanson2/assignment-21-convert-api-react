// const Backbone = require('Backbone')
const React = require('react')
console.log(React)
const $ = require('jquery')
const ReactDOM = require('react-dom')
// console.log(Backbone)
// document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`



let HomeView = React.createClass({

    render: function(){

      let congressArray = this.props.userDataList.map(function(userObj, i){
        return <CongressPeople userDataObj={userObj} key={i} />
      })

      return (
        <div>
          {congressArray}
        </div>
      )

    }
})


let CongressPeople = React.createClass({
    render: function(){

      return (
        <div>
          <div className ="col-sm-4 col-md-4 elementHolder1">
           <div className ="thumbnail1">
              <h1>{this.props.userDataObj.first_name} {this.props.userDataObj.last_name}</h1>
             <h3>{this.props.userDataObj.title} -- {this.props.userDataObj.party} - {this.props.userDataObj.state_name}</h3>
             <ul>
                <li>email: {this.props.userDataObj.oc_email}</li>
               <li> website: {this.props.userDataObj.website}</li>
               <li>facebook: {this.props.userDataObj.facebook_id}</li>
               <li>twitter: {this.props.userDataObj.twitter_id}</li>
             </ul>
             <p className ="theP1">Term End {this.props.userDataObj.term_end}</p>
           </div>
         </div>
        </div>

      )
    }
})


$.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=d1b6cb41350045d4a5a25dcc0e0c728f").then(function(serverRes){


  ReactDOM.render(<HomeView userDataList={serverRes.results}/>, document.querySelector('#app-container'))
})
