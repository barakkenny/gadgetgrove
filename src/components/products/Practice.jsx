import React from "react";

class Practice extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
        }

    }

    render(){
        const { count } = this.state

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> {
                 this.setState({
                    count: count + 1
                 })
            }
            }>count</button>
        </div>
    )
}

}
export default Practice;