import React from 'react'

const SECURITY_CODE = "paradigma";

const initialState ={
    value:"",
    error:false,
    loading:false,
    deleted:false,
    confirmed:false
}

function UseReducer() {

    const [state,dispatch] = React.useReducer(reducer,initialState);
    console.log(state)

    React.useEffect(()=>{
        //console.log('empieza el efecto')

        if(state.loading){
            
            setTimeout(()=>{
               // console.log('dentro del backend')

                if(state.value !== SECURITY_CODE)
                    dispatch({
                        type:'ERROR'
                    })
                else{
                    dispatch({
                        type:'CONFIRM'
                    })
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
                {state.error && !state.loading && <p>Error: no function</p>}
                
                {state.loading && <p>Loading...</p>}
                <input 
                type="text"
                placeholder = "secure code"
                value={state.value} 
                onChange={(e) => {
                    
                    dispatch({
                        type:'WRITE',
                        payload:{newValue:e.target.value}
                        
                    })
                }}
                />
                <button
                onClick={() => {dispatch({
                    type:'CHECK'})}}
                > Check!</button>
                </div>
                );
    }else if(state.confirmed && !state.deleted){
        return(
        <>
            <p>Are you sure you want to delete state?</p>
            <button  
            onClick={()=> {dispatch({type:'DELETE'})}}
            type="button"> yes, delete </button>
            <button 
            onClick={()=> dispatch({type:'RESET'})}
            
            type="button">No</button>
        </>
        )
    }else{
        return(
            <>
            <p>Deleted</p>
            <button
                onClick={()=> dispatch({type:'RESET'})}
            >Recover state</button>
            </>
        )


    }
}

const reducerObj = (state,payload) => {
    let writeValue;
    if(payload && payload.hasOwnProperty('newValue'))
        writeValue = payload.newValue;
    else{
        writeValue =state.value
    }
    return{
        'ERROR':{
            ...state,
            error:true,
            loading:false
        },
        'CHECK':{
            
            ...state,
            loading:true
        },
        'CONFIRM':{
            ...state,
            loading:false
            ,error:false
            ,confirmed:true
        },
        'WRITE':{
            ...state,
            value:writeValue
        },
        'DELETE':{
            ...state,
            deleted: true
        },
        'RESET':{
            ...state,
            deleted:false,
            confirmed:false,
            value:''}
    }
}

const reducer = (state,action) => {

    if(reducerObj(state)[action.type]){
        // debugger
        
        return reducerObj(state,action.payload)[action.type]
    
            
            

    }else{
        return state
    }
}






export {UseReducer} 
