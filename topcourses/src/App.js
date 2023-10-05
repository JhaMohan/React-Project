import React, { useState } from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/NavBar.js";
import { Spinner } from "./components/Spinner";
import { apiUrl, filterData } from './data'
import { toast } from "react-toastify";
import { useEffect } from "react";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try {
      const apidata = await fetch(apiUrl);
      const output = await apidata.json();
      console.log("data", output);
      setCourses(output.data);
    } catch (error) {
      toast.error("Somethig went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        {loading ? <Spinner></Spinner> : <Cards courses={courses} category={category}></Cards>}
      </div>
    </div>
  );
};

export default App;
