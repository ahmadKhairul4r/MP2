export default function Card({ children }) {
    return (
        <div className="w-full  px-4 ">
            <div className=" bg-white p-10  rounded-xl">
                { children }
            </div>
        </div>
    );
  }
  