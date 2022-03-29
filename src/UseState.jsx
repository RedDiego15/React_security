import React from 'react'

const SECURITY_CODE = "paradigma";

function UseState() {
    
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [value,setValue] = React.useState("");

    console.log(value)

    React.useEffect(()=>{
        //console.log('empieza el efecto')

        if(loading){
            setError(false)
            setTimeout(()=>{
               // console.log('dentro del backend')
                
               setLoading(false);

                if(value !== SECURITY_CODE)
                    setError(true) 
                
               // console.log('termina cambio en el backend')
            },2000)
           // console.log('termina el efecto')
        }
        
        
    },[loading])

    return (
    <div>
        <h2>Delete Use state</h2>
        <p>please, write the security code</p>
        {error && <p>Error: no funcion</p>}
        
        {loading && <p>Loading...</p>}
        <input 
        type="text"
        placeholder = "codigo de seguridad"
        value={value} 
        onChange={(e) => {
            setValue(e.target.value);

        }}
        />
        <button
        onClick={() => setLoading(prevState => !prevState)}
        > Check!</button>
        </div>
        );
}

export {UseState}

