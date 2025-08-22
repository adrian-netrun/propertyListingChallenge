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
    description: string;
    location: string;
    price: number;
    rating: number;
    superhost: boolean;
    title: string;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

function ModalTile({ data, isOpen, setIsOpen }: iModal) {
  return (
    <div className='prop__modal__cont'>
      <div className='prop__modal'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className='buttonContainer'>
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
    </div>
  );
}

interface iOpenButton {
  setIsOpen: React.Dispatch<boolean>;
  isOpen: boolean;
}

function OpenButton({ setIsOpen, isOpen }: iOpenButton) {
  return (
    <div className='buttonContainer'>
      <button
        type='button'
        className='open'
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        More Information
      </button>
    </div>
  );
}

interface iPropertyData {
  data: {
    capacity: {
      people: number;
      bedroom: number;
    };
    image: string;
    description: string;
    location: string;
    price: number;
    rating: number;
    superhost: boolean;
    title: string;
  };
}

function PropertyModal({ data }: iPropertyData) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ModalTile isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      )}
      {!isOpen && <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PropertyModal;
