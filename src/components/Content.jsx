import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((resp) => resp.json())
      .then((data) => setData(data[1]));
  }, []);
  // console.log(data[1]);
  return (
    <div>
      <ul className="flex flex-wrap p-1">
        {/* {data.map((item, index) => (
          <li className="w-[25%] p-1" key={index + 1}>
            <Link to="/">
              <img src={item.imgUrl} alt={item.name} />
              <p className="uppercase bg-primary w-full rounded-b text-[0.55rem] text-white py-[3px] font-[500] pl-[3px] h-5 overflow-hidden leading-4">
                {item.name}
              </p>
            </Link>
          </li>
        ))} */}
        <li className="w-[50%] bg-[#02A9DD] p-1 relative">
          <Link to="/">
            <img
              className=""
              src="https://0kqo9br0eyii.jquut.net/system-requirement/Multimedia/Navigation/Mobile/Term/f6a3a3620cfa499fb5750f808f1c3038.png"
              alt="1"
            />
            <p className="rounded-tl-[10px] text-[0.8rem] text-white bg-[#0278DC] absolute bottom-0 right-0">
              vào trò chơi
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Content;
