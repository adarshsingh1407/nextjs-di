import dynamic from 'next/dynamic'
import React from 'react'

const DynamicComponent = dynamic(import('../components/hello1'))

class Index extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <div>
        <DynamicComponent />
        <p>Hello Next.js</p>
      </div>
    );
  }
}

export default Index
