import React from 'react'

function UseState() {
    
    const [state,setState] = React.useState(false);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(()=>{
        //console.log('empieza el efecto')

        if(loading){
            setTimeout(()=>{
               // console.log('dentro del backend')
                setLoading(false);
               // console.log('termina cambio en el backend')
            },2000)
           // console.log('termina el efecto')
        }
        
        
    },[loading])

    return (
    <div>
        <h2>Delete Use state</h2>
        <p>please, write the security code</p>
        {!state && <p>Error: no funcion</p>}
        
        {loading && <p>Loading...</p>}
        <input type="text" placeholder = "codigo de seguridad"value="" />
        <button
        onClick={() => setLoading(prevState => !prevState)}
        > Check!</button>
        </div>
        );
}

export {UseState}

