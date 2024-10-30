import "../App.css"
import "../index.css"


function List({person}) {
console.log(person)
  return (
<div className ="shadow-white	 bg-white rounded-md listheight shadowcus ">
    <div className="p-2 flex flex-col  ">
     {
      person.map((item) => (
      <div key={item.key} className=" p-2  border-b-2 border-b-slate-300 flex flex-row items-center   mb-5   gap-6 " >
        <div className="">
        <img
                  className="w-20 h-20 mr-6 rounded-full border border-neutral-300"
                  src={item.picture}
                  alt=""
                />
        </div >
        <div className="text-right">
        <h3 className="text-xl font-bold text-black">{item.name}</h3>
        <p className="text-black mt-2 text-xl font-bold">{item.time}</p>
        </div>
       
      </div>
      ))
     }
    </div>
</div>
  );
}

export default List;