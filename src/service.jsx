export const getuser = (key)=>{
    try{
      const data = localStorage.getItem(key)
      return JSON.parse (data);
    }catch(error){
      console.log(error)
    }
}
export const setuser = (key,value)=>{
    try{
        const data = localStorage.setItem(key,JSON.stringify(value));
        return true;
    }catch(error){
        console.log(error)
    }
} 