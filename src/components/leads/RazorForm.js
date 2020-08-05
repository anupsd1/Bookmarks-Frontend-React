var React = require('react');
// import { extname } from 'path';
var createReactClass = require('create-react-class');


import Newrazorformtwo from './newrazorformtwo'
// var Template = { __html: __html };



var __html = require("./newrazorform.html")
var Template = {__html: __html}


function RazorForm(){ createReactClass({
  render: function() {
    var RazorPay="RazorPay"
    return React.createElement(
      <div dangerouslySetInnerHTML={Template} />
    );
  }
});}

// export class RazorForm extends Component{
//     render(){
//       var RazorPay="RazorPay"
//       return(
//           <Template  />
//           // <Newrazorformtwo RazorPay={RazorPay} />
//       );
//     }
// }

export default RazorForm;
