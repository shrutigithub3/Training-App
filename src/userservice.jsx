import axios from 'axios';
export const formuser =(name,email,password,age,role)=>{
    try{
      axios
      .post("http://localhost:3002/formuser",
      {
        name,email,password,age,role
      })
      .then((response)=>{
        return (response.data);
      })
    }catch(error){
      console.log("error",error)
    }
  }
  export const newusers = async()=>{
    try{
      const response = axios.get("http://localhost:3002/newusers")
      return response;
    }catch(error){
      console.log("error",error)
    }
  }
  export const putusers =async (_id,email,password,name,age,role)=>{
    try{
        const response = axios.put(`http://localhost:3002/putusers/${_id}`,{
            name ,email,password,age,role

        })
        .then((response)=>{
            return response;
        })
      }catch(error){
        console.log("error",error)
      }
    }
    

export const deleteusers=async (_id,email,password,name,age,role)=>{
    try{
        const response = axios.put(`http://localhost:3002/deleteusers/${_id}`,{
            name,email,password,age,role

        })
        .then((response)=>{
            return response;
        })
      }catch(error){
        console.log("error",error)
      }
    }
export const SignIn=async (email,password)=>{
      try{
          const response = await axios.post("http://localhost:3002/SignIn",{
              email,password
  
          })
        if(response.status ===200){
          return Promise.resolve(response);

        }
      }catch(error){
        if(error.response.status===422){
          return Promise.reject({status:422,message:error.response.data.message});
        }
        return Promise.reject({status:error.status,message:error.response.data.message})
      }
    }

    export const sendEmail = async (data)=>{ 

        try{
            const response = await axios.post("http://localhost:3002/sendEmail",data)
    
          if(response.status==200){
            Promise.resolve(response)
            return response
          }
          }catch(error){
            return Promise.reject(error)
          }
        }