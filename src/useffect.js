import  { useState , useEffect } from "react";
const Useeffect=()=>{
    const [value,setstate]=useState([]);
    const getdata= async()=>{
      const response= await fetch("https://reqres.in/api/users?page=2")
      let data=await response.json()
      setstate(data.data)
    }
    useEffect(()=>{
        getdata();
    },[])
    return(
        <>
            <h2>List of User</h2>
            <div className="container-fluid mt-5 ">
                <div className="row text-center">
                    
                            {
                                value.map((currnt)=>{
                                    
                                    return (
                                        <div className="col-10 col-lg-4 col-md-6 mt-5">
                            <div className="card pd-2 m-3">
                            <div className="d-flex align-item-center">
                            <div className="image col-md-6" key={currnt.id}>
                                    <img src={currnt.avatar}className="rounded" width="155" alt="img"/>
                            </div>
                                    <div className="ml-3">
                                        <h4 className=" head">{currnt.first_name}</h4><span className="textLeft">{currnt.email}</span>
                                        <div className="p-2 mt-0 bg-primary d-flex justify-content-between rounded text-white starts">
                                            <div className="d-flex flex-column"><span className="articles">Like</span><span className="number1">10</span></div>
                                            <div className="d-flex flex-column"><span className="followers">followers</span><span className="number1">110</span></div>
                                            <div className="d-flex flex-column"><span className="rating"></span>dislike<span className="number1">05</span></div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                                )})
                            }
                           
                </div>
            </div>
        </>
    )
}
export default Useeffect