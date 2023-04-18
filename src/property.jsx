function Property({Data}){
    let newItems = Data.map ((element)=>{
        return (
            <>
            <div>{element.firstname}</div>
            <div>{element.lastname}</div>
            <div>{element.email}</div>
            <div>{element.age>=18 ? (<div>"LEGAL"</div>) : (<div>"Illegal"</div>)}</div>
            <div>{element.nationality}</div>
            <div>{element.Belongs_to_india && (<div>{element.state}</div>) }</div>
            <div>{element.city}</div>
           
            </>
        )
    })
        return(
        <div>{newItems}</div>
        )
    
    


}

export default Property;