import React from 'react'

const SECURITY_CODE = "paradigma";

function UseState() {
    const[state,setState] = React.useState({
        
    });

    const onCheck = () =>{
        setState({...state,loading: true})
    }
    const onConfirm = () =>{
        setState({...state,loading:false,error:false,confirmed:true})
    }
    const onError =() =>{
        setState({...state,loading:false,error:true})
    }
    const onWrite = (newValue)=>{
        setState({
            ...state,
            value:newValue})
    }
    const onReset = () =>{
        setState({...state,deleted:false,confirmed:false,value:''})
    }
    const onDelete = () =>{
        setState({...state,deleted: true})
    }
    console.log(state)

    React.useEffect(()=>{
        //console.log('empieza el efecto')

        if(state.loading){
            
            setTimeout(()=>{
               // console.log('dentro del backend')

                if(state.value !== SECURITY_CODE)
                    onError();
                else{
                    onConfirm();
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
                    onWrite(e.target.value);
                }}
                />
                <button
                onClick={() => {onCheck()}}
                > Check!</button>
                </div>
                );
    }else if(state.confirmed && !state.deleted){
        return(
        <>
            <p>Are you sure you want to delete state?</p>
            <button  
            onClick={()=> {onDelete()}}
            type="button"> yes, delete </button>
            <button 
            onClick={()=> {onReset()}}
            
            type="button">No</button>
        </>
        )
    }else{
        return(
            <>
            <p>Deleted</p>
            <button
                onClick={()=> {onReset()}}
            >Recover state</button>
            </>
        )


    }
}

export {UseState}

