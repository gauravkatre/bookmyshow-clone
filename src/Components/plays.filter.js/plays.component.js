import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure >
    {({ open }) => (
      <>
      <Disclosure.Button className=" bg-slate-300 px-4 py-2 flex items-center gap-3 ">
      {open ? <BiChevronUp /> : <BiChevronDown />}
      <div className=' py-4'>
       <span className= {open ? "text-red-600" : "text-gray-700"}>
        {props.title}
       </span>
       </div>
      

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 ">
        <div className="flex item-center gap-3 flex-wrap bg-slate-300 px-4 py-4">
         {props.tags.map((tag) => (
           <>
            <div className="border-2 border-gray-200 p-2  ">
            <span className="text-red-600 text-sm">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;