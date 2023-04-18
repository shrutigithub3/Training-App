function Array(props){
    const names = ["shruti","mansi","shiffali"]
    let arr= names.map((index,item)=>{
        return(
            <p key={index}>{item}</p>
        )
    })
    return <p>{arr}</p>
}
export default Array;