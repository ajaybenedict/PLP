import React, { useState } from "react";
import Pagination from "../../components/pageProps/shopPage/Pagination";


const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(48);

  return (
    <div className="dark:bg-slate-800 max-w-container mx-auto px-4">
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-full mdl:w-[100%] lgl:w-[100%] h-full flex flex-col gap-10">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
