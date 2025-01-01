

export default function App() {


  


   function homer (){ 
    alert("you are clicked")
   }
  return (
    // <div className="border-8 border-yellow-700">
    //   <h1>Raman SIngh</h1>
    //   <div className="bg-green-400 text-gray-950">
    //     <p className="text-xs">Raman</p>
    //     <p className="truncate ...">

    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
    //       obcaecati itaque soluta asperiores tempore. Dolores nesciunt,
    //       perspiciatis iusto magnam omnis obcaecati tempore exercitationem totam
    //       voluptate ullam alias! Aliquid, soluta eaque.
    //     </p>
    //     <p className="text-clip overflow-hidden ...">

    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
    //       obcaecati itaque soluta asperiores tempore. Dolores nesciunt,
    //       perspiciatis iusto magnam omnis obcaecati tempore exercitationem totam
    //       voluptate ullam alias! Aliquid, soluta eaque.
    //     </p>
    //   </div>

    //   <button className=" pt-10 Raman "> Billa </button>

    // </div>

    //flex

    // <div className=" flex w-full ">
    //   <div className=" p-16  w-1/2 bg-red-200 text-green-950 ra "> go </div>
    //   <div className=" p-16  w-1/2 bg-blue-200 text-green-950  ba"> sds</div>

    // </div>

    //GRIDS 

    /* <div className="bg-red-200   p-10 grid grid-cols-4 gap-4">
  <div className="bg-red-100 p-10 rounded-md shadow-md">1</div>
  <div className="bg-red-500 p-10 rounded-md shadow-md">2</div>
  <div className="bg-red-800 p-10 rounded-md shadow-md col-span-2">3</div> */
    // <div>  
    //   <span>
    //   <img className="float-left w-1/3 bg-slate-400 p-14" src="https://i0.wp.com/pubity.com/wp-content/uploads/2024/10/Untitled-design-189.jpg?fit=1200%2C800&quality=50&ssl=1" alt=""   />
    
      
    // </span>
      
    //   <div className="bg-slate-400 grid grid-cols-4  p-10 gap-10">
        
    //     <p className="bg-red-200">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    //       expedita amet doloribus maiores, commodi accusamus aliquid repudiandae
    //       fugiat non vero modi qui rerum, sed necessitatibus error possimus
    //       dolore impedit laudantium quisquam! Ab dolore voluptate nemo voluptas
    //       dolores nulla explicabo ut obcaecati laboriosam, optio pariatur
    //       incidunt totam similique adipisci? Veritatis, numquam?
    //     </p>
    //     <p  className="bg-red-100">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    //       expedita amet doloribus maiores, commodi accusamus aliquid repudiandae
    //       fugiat non vero modi qui rerum, sed necessitatibus error possimus
    //       dolore impedit laudantium quisquam! Ab dolore voluptate nemo voluptas
    //       dolores nulla explicabo ut obcaecati laboriosam, optio pariatur
    //       incidunt totam similique adipisci? Veritatis, numquam?
    //     </p>
    //     <p  className="bg-red-500">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    //       expedita amet doloribus maiores, commodi accusamus aliquid repudiandae
    //       fugiat non vero modi qui rerum, sed necessitatibus error possimus
    //       dolore impedit laudantium quisquam! Ab dolore voluptate nemo voluptas
    //       dolores nulla explicabo ut obcaecati laboriosam, optio pariatur
    //       incidunt totam similique adipisci? Veritatis, numquam?
    //     </p>
    //     <p  className="bg-slate-500">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    //       expedita amet doloribus maiores, commodi accusamus aliquid repudiandae
    //       fugiat non vero modi qui rerum, sed necessitatibus error possimus
    //       dolore impedit laudantium quisquam! Ab dolore voluptate nemo voluptas
    //       dolores nulla explicabo ut obcaecati laboriosam, optio pariatur
    //       incidunt totam similique adipisci? Veritatis, numquam?
    //     </p>
       
    //   </div>
    // </div>

//EFFECTS AND FILTERS
//     <div className=" flex justify-center items-center min-h-screen bg-slate-400  gap-10">
//   <button
//     className=  " rounded-full bg-red-500 text-gray-950 p-4 rounded-lg shadow-2xl hover:bg-red-300 active:bg-red-200 transition duration-300"
//     onClick={homer}
//   >
//     Click Me
//   </button>
//   <button 
//     className=  " flex  bg-red-500 text-gray-950 p-4 rounded-lg shadow-2xl hover:bg-red-900 active:bg-red-200 transition duration-300"
//     onClick={homer}
//   >
//     Click Me
//   </button>
// </div>


//ANIMATION AND TRANSITION


  <div  >   

    
    
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">

   <span > 
    <img  class=" w-1/2" src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/Beautiful-Women-In-The-World.jpg.avif" alt="" />
    
    <button
    className="  hover:-translate-y-6 ...    bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-600 hover:to-blue-900 transition-transform transform hover:scale-215 duration-300"
    onClick={homer}
  >
   Button
  </button>
    
    </span>
  
</div>

  </div>

  );
}
