import React from "react";
import Image from "../../designLayouts/Image";

const Product = (props) => {

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
       
      </div>
      <div className="max-w-80 flex flex-col gap-1">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor">
            {props.productName}
          </h2>
        </div> 
      </div>
    </div>
  );
};

export default Product;
