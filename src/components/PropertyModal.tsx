import { useState } from 'react';

interface iModal {
  // data will be everything from PropertyDataType w/o the id
  data: {
    capacity: {
      people: number;
      bedroom: number;
    };
    image: string;
    location: string;
    price: number;
    rating: number;
    superhost: boolean;
    title: string;
  };
}

function ModalTile({ data, isOpen, setIsOpen }) {
  return (
    <div className='prop__modal' onClick={(e) => setIsOpen(!isOpen)}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit
        asperiores debitis? Voluptatibus dolor ut at deserunt nisi beatae, nobis
        recusandae, perferendis atque odio necessitatibus quod reiciendis rem
        eligendi sapiente?
      </p>
      <button
        type='button'
        className='close'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        Exit
      </button>
    </div>
  );
}

function OpenButton({ setIsOpen, isOpen }) {
  return (
    <button
      type='button'
      className='open'
      onClick={(e) => {
        setIsOpen(!isOpen);
      }}
    >
      More Information
    </button>
  );
}

function PropertyModal({ data }: iModal) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <ModalTile isOpen={isOpen} setIsOpen={setIsOpen} />}
      {!isOpen && <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PropertyModal;
