import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from './components/Cards';
import Spinner from "./components/Spinner";
import {filterData,apiUrl} from './data';
import { toast } from "react-toastify";


function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  const fetchData = async()=>{
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      // console.log(output.data);
    }
    catch{
      toast.error('Something wrong');
    }
    setLoading(false);
  }

  useEffect(()=>{ 
    fetchData();
  },[]);

  return (
    <div className="min-h-screen bg-[#4A4E69] flex flex-col">
      <Navbar/>
      <div className="w-[100%]">
        <Filter category={category} setCategory={setCategory} filterData={filterData}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category ={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
