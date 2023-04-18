function ArrayofObject(props){
    let Student =[
        {
           "name": "shruti",
           "rollnumber": "1903359",
           "course":"CSE"
        },
        {
           "name": "shiffali",
           "rollnumber": "1903500",
           "course":"EE"
        },
        {
           "name": "mansi",
           "rollnumber": "1903342",
           "course":"IT"
        },
        {
            "name": "anshu",
            "rollnumber": "1903323",
            "course":"ECE"
        }
    ]
    const Items = Student.map((element) => {
            return(
                <>
                
                 <div>{element.name=element.name + "abc"}</div>
                  <div>{element.rollnumber}</div>
                 <div>{element.course}</div>
                 </>
            )
        }
    )
    return (
        <div>{Items}</div>
    )
}
export default ArrayofObject;

            
  