import React from 'react'
import {Loading} from './Loading'

const SECURITY_CODE = "paradigma";

class ClassUseState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:"",
            error:false,
            loading:false
        }
    }
    componentDidMount(){
        console.log("Component did mount");
    }
    componentDidUpdate(){
        console.log("Component did update");
        if(this.state.loading){
            setTimeout(()=>{
                console.log('dentro del backend')
                if(SECURITY_CODE === this.state.value)
                    this.setState({loading:false});
                else
                    this.setState({
                        error:true,
                        loading:false})

                
                console.log('termina cambio en el backend')
            },2000)
        console.log('termina did update')
        }
    }
    
    // UNSAFE_componentWillMount(){
    //     console.log("ComponentWill Mount");
    // }
    render (){
        return (
        <div>
            <h2>Delete Class state</h2>
            <p>please, write the security code</p>
            {this.state.error && !this.state.loading && <p>Error: no funcion</p>}
            {this.state.loading && <Loading/>}

            
            <input
            value={this.state.value}
            onChange={(e) => {this.setState({value: e.target.value})} }
            placeholder="codigo de seguridad" />
            <button
            onClick={() => this.setState(prevState => ({loading : !prevState.loading }))}
            > Check!</button>
        </div>
        );
        
    }
}

export {ClassUseState}