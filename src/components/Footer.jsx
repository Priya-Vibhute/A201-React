import React from 'react';

class Footer  extends React.Component
{
   render()
   {
    console.log(this);

     return(<>

     <h1>Hello I am class based component</h1>
     <ul>
      <li>property 1 {this.props.id}</li>
      <li>property 2 {this.props.name}</li>
      <li>property 3</li>
     </ul>
     </>) ;
   }
}

export default Footer;