import React from 'react';

export default class BOX extends React.Component{


constructor(props){

  super() ;

  //this.handleChange = this.handleChange.bind(this);

}
deletefunc = () => {


 this.props.delete(this.props.index);

}
editfunc =() =>{
  this.props.edit(this.props.index) ;

}

  render() {
  //  console.log("key is" + this.props.index) ;


    var its = this.props.arrayr.split(",").map((item,index)=>{

       return <li  key={index}  > {item}</li> ;



    }) ;
  /*var z = ()=>{ for(var i=0; i<its.length;i++)
    {

    console.log(its);
     return <li> its[i]</li> ;

   }}*/



return (


<div id="boxc">

<h4 id="heading4"> {this.props.arrayt} </h4>


{its}
<button className="btn btn-primary" id="boxd" onClick={this.deletefunc}>Delete</button>


<button className="btn btn-primary" id="boxe" onClick={this.editfunc}>Edit</button>






</div>














) ;

  }
}
