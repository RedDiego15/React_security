import React from 'react'

const SECURITY_CODE = "paradigma";

function UseState() {
    const[state,setState] = React.useState({
        value:"",
        error:false,
        loading:false,
        deleted:false,
        confirmed:false
    });

    console.log(state)

    React.useEffect(()=>{
        //console.log('empieza el efecto')

        if(state.loading){
            
            setTimeout(()=>{
               // console.log('dentro del backend')

                if(state.value !== SECURITY_CODE)
                    setState({...state,loading:false,error:true})
                else{
                    setState({...state,loading:false,error:false,confirmed:true})
                } 
                
               // console.log('termina cambio en el backend')
            },3000)
           // console.log('termina el efecto')
        }
        
        
    },[state.loading])

    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Delete Use state</h2>
                <p>please, write the security code</p>
                {state.error && !state.loading && <p>Error: no funcion</p>}
                
                {state.loading && <p>Loading...</p>}
                <input 
                type="text"
                placeholder = "codigo de seguridad"
                value={state.value} 
                onChange={(e) => {
                    setState({
                        ...state,
                        value:e.target.value});
        
                }}
                />
                <button
                onClick={() => {setState({...state,loading: true})}}
                > Check!</button>
                </div>
                );
    }else if(state.confirmed && !state.deleted){
        return(
        <>
            <p>Are you sure you want to delete state?</p>
            <button  
            onClick={()=> setState({...state,deleted: true})}
            type="button"> yes, delete </button>
            <button 
            onClick={()=> setState({...state,confirmed:false,value:''})}
            
            type="button">No</button>
        </>
        )
    }else{
        return(
            <>
            <p>Deleted</p>
            <button
                onClick={()=> setState({...state,deleted:false,confirmed:false,value:''})}
            >Recover state</button>
            </>
        )


    }
}

export {UseState}

