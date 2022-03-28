import React from 'react'
import {Loading} from './Loading'
class ClassUseState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
                this.setState({loading:false});
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
            {!this.state.error && <p>Error: no funcion</p>}
            {this.state.loading && <Loading/>}

            
            <input placeholder="codigo de seguridad" />
            <button
            onClick={() => this.setState(prevState => ({loading : !prevState.loading }))}
            > Check!</button>
        </div>
        );
        
    }
}

export {ClassUseState}