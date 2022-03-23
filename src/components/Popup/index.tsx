import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Popup() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="fixed relative m-2 h-50% bg-transparent border-solid border-2 border-zinc-200 left-0 bottom-0 w-full p-3 text-center text-white uppercase text-bold">
              <button className="text-stone-900" onClick={handleShow} > Quick Shop</button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Button onClick={handleClose} className="float-right text-2xl mr-4"> X </Button>
        <Modal.Body>
        <div className="group relative flex">
      <div className="">
        <img
          src="https://www.jomalone.com/media/export/cms/products/1000x1000/jo_sku_L4R501_1000x1000_0.png"
          alt="Test"
          className="sm:w-24 sm:h-64 md:h-96 sm:m-5 md:m-10 object-center object-cover"
        />        
      </div>
      <div className="w-full  mx-5 my-5">
      <h3 className="w-full text-lg  sm:mx-5 sm:my-5 md:mx-10 md:mt-10 md:text-3xl font-bold">
            Nectarine Blossom & Honey Diffuser
      </h3>
      <p className="mt-1 text-lg sm:mx-5 sm:my-5 md:mx-10">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(100)}
            
      </p>
      <p className="mt-1 text-lg mb-5 sm:mx-5 sm:my-5 md:mx-10">100 <span className='lowercase'>ml</span></p>
      <div className="space-y-6">
          <p className="text-base text-gray-900 md:mx-10 sm:hidden">A sparkling selection of Jo Malone London favourites in 9ml. Includes zesty Lime Basil & Mandarin, mellow English Pear & Freesia, mesmerising Wild Bluebell, luscious Fig & Lotus Flower and windswept Wood Sage & Sea Salt. Picked to be worn solo or paired together to create a unique Scent Pairing.</p>
      </div>
      <div className="left-0 bottom-0 sm:mx-5 md:mx-10 w-full text-center md:w-1/2 md:right-0 md:left-auto md:mt-5 text-white uppercase text-bold">
          <a className="bg-black border-solid block cursor-pointer w-full p-3 text-center text-white uppercase text-bold">Add to cart</a>
      </div>   
      </div>

    </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;