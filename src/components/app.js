import React, { Component } from 'react';
import BOX from './ComponentBOX.js'
import Modal from 'react-modal';


const com = () =>{

  console.log("this")

return  <BOX />;


}


 export default class App extends React.Component {


   constructor() {
       super();

       this.state = {
         modalIsOpen: false ,
         title:[ 'Pumpkin Pie' , 'Spaghetti' ,'Onion Pie'
         ],
         recipe:[ 'Pumpkin Puree,Sweetened Condensed Milk,Eggs,Pumpkin Pie Spice,Pie Crust',
                  'Noodles,Tomato Sauce,(Optional) Meatballs',
                  'Onion ,Pie Crust ,Sounds Yummy right?'
                ],

         a:'Untitled',
         b:'',
         buttonname:'Add',
         compcount:-1


       };

       this.openModal = this.openModal.bind(this);
       this.afterOpenModal = this.afterOpenModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
     }

     openModal() {
       this.setState({modalIsOpen: true});
     }

     afterOpenModal() {
       // references are now sync'd and can be accessed.
       console.log("i am called") ;
      }

     closeModal() {


         this.setState({compcount:-1}) ;
         this.setState({buttonname:'Add'}) ;
         this.setState({a: 'Untitled'});


         this.setState({b: ''});

       this.setState({modalIsOpen: false});
     }


     deleteModal = (key) => {

       console.log( key) ;

       var t = this.state.title  ;
       console.log(t);
         t.splice(key,1)

      var z = this.state.recipe ;
      z.splice(key,1) ;
        //  console.log(t);
      this.setState({title:t});
      this.setState({recipe:z});
     }
     editModal = (key) =>{

       console.log("ed;" + key) ;
       this.setState({modalIsOpen: true});
       this.setState({a: this.state.title[key]});


       this.setState({b: this.state.recipe[key]});


      this.setState({compcount:key}) ;
      this.setState({buttonname:'Save'}) ;


     }

     /*handleChange(event) {
        this.setState({temptitle: event.target.value});
      //  var temp = this.state.title;
        //temp.push(event.)


        }
    handleChangeIngredients(event)
    {
      this.setState({tempval:event.target.value}) ;
    //  console.log(event.target.value);

  }*/

  makeComponent = () =>
{


   if(this.state.compcount!=-1){


    var arr = this.state.title ;
    var brr = this.state.recipe ;


    arr.splice(this.state.compcount , 1  ,   this.refs.newTitle.value  ) ;

    brr.splice(this.state.compcount , 1  ,   this.refs.newIngr.value  ) ;


    this.setState({title:arr})  ;
    this.setState({recipe:brr})  ;
    this.setState({compcount:-1}) ;
     this.setState({buttonname:'Add'}) ;
     this.setState({a:'Untitled'});
     this.setState({b:''});

     this.setState({modalIsOpen: false});
     return ;
   }






/*var arrayvar = this.state.temparray.slice()
 arrayvar.push(this.state.temptitle);
 this.setState({ temparray: arrayvar });*/
 //this.setState( {temparray:this.state.temparray.push(this.state.temptitle) }) ;

//  console.log("tmparray is " + this.state.temparray) ;

 //this.setState( {title:this.state.compcount }) ;




 //var ab = this.refs.newIngr.value ;
/*
 if (this.myTextInput !== null) {
     this.myTextInput.focus();
     console.log(this.myTextInput) ;
   }
  //console.log("a2 is " + this.textInput) ;



/*

 this.setState({
    temparray: this.state.temparray.concat([this.state.tempval])
});*/

var input = this.refs.newTitle.value;

var inputValue = this.refs.newIngr.value;

var t = this.state.title  ;
t.push(input) ;
this.setState({title:t}) ;

t=this.state.recipe ;
t.push(inputValue) ;
this.setState({recipe:t}) ;


  //this.setState( {temparray:this.state.temparray.concat(this.state.temptitle) }) ;
//  console.log("temp array "+this.state.temparray) ;

//  this.setState({ temparray:this.state.temparray.concat(this.state.tempval) });

   //this.setState({ temparray: this.state.temparray.concat(this.state.tempval) })
 //this.setState({compcount:this.state.compcount + 1})  ;

 this.setState({modalIsOpen: false});

}





  render() {

  /*  var itm ;
   for( var i =0 ; i<1 ;i++)
   {
       itm =   <BOX     array={this.state.temparray}      /> ;
     console.log("hee") ;
   }*

      console.log("tile is + " + this.state.title) ;

   if(this.state.compcount!=0)
  {
      var itm =  this.state.temparray.map((item,index)=>{
       console.log("item is "  +item) ;
     return <BOX   key={index} array={this.state.temparray}      /> ;
   }) ;


 }*/




var itm  = this.state.title.map((item,index)=>{


  console.log( "index is  "+ index) ;


return <BOX   key = {index} arrayt ={item}   arrayr={this.state.recipe[index]}   delete={this.deleteModal}    edit={this.editModal} index={index} /> ;



console.log(item) ;

});







    return (



      <div>

         <div className="box">
             {itm}


          </div>
          <button id="addr" onClick={this.openModal} className="btn btn-primary">ADD Recipe</button>



         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           className="modals"

          >

           <h5>Add a Recipe</h5>
           <hr></hr>

           <p> <b>Recipe</b> </p>
           <input type="text" placeholder="Recipe Name"  ref="newTitle"  id="tt" defaultValue={this.state.a}></input>
          <hr></hr>
           <p> <b>Ingredients</b> </p>
            <textarea    ref= "newIngr"   id="rr"  placeholder="Enter Ingredients Name , Separated, By Comma ,"  defaultValue={this.state.b}></textarea>
           <hr></hr>

           <div id="buttonbar">

            <button onClick={this.makeComponent} className="btn btn-primary" id="del">{this.state.buttonname}</button>

            <button  onClick={this.closeModal} className="btn btn-primary" id="close">Close</button>
          </div>
           </Modal>
       </div>



    );
  }
}
