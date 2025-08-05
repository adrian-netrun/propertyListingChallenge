import { useState } from 'react';
import './PropertyModal.css';
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

function ModalTile({ data, isOpen, setIsOpen, index }) {
  const [offer] = useState(data[index]);
  console.log(offer);
  return (
    <div className='prop__modal__cont'>
      <div className='prop__modal'>
        <p>{offer.description}</p>
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

function PropertyModal({ data, index }: iModal) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ModalTile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={data}
          index={index}
        />
      )}
      {!isOpen && <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PropertyModal;
