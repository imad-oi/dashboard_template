import { useNavigate } from "react-router-dom";
import CardOfPage from "../components/CardOfPage";
import CardItem from "../components/CardOfPage2";

const Pages = () => {
  const router = useNavigate();

  const handleRoute = (url) => {
    const formatedUrl = url.replace(/\s/g, "-").toLowerCase();
    router(formatedUrl);
  };

  const list = [
    {
      title: "Thinking Components",
      src: "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_640.jpg",
    },
    {
      title: "Functional Fury",
      src: "https://cdn.pixabay.com/photo/2023/08/19/15/39/breakfast-8200753_640.jpg",
    },
    {
      title: "React Rendezvous",
      src: "https://cdn.pixabay.com/photo/2023/08/08/18/01/butterfly-8177925_1280.jpg",
    },
    {
      title: "Stateful Symphony",
      src: "https://cdn.pixabay.com/photo/2023/06/01/08/18/money-8033100_640.jpg",
    },
    {
      title: "Async Awakenings",
      src: "https://cdn.pixabay.com/photo/2017/04/25/05/45/basketball-2258651_640.jpg",
    },
    {
      title: "The Art of Reusability",
      src: "https://cdn.pixabay.com/photo/2023/05/21/17/48/field-8008987_640.jpg",
    },
    {
      title: "Thinking Components",
      src: "https://cdn.pixabay.com/photo/2023/05/01/14/14/mountains-7963159_640.jpg",
    },
  ];

  return (
    <div className="p-7 flex-1 h-screen overflow-y-scroll overflow-x-scroll ">
      <div className="mb-4">
        <p className="text-2xl font-bold">Made for You</p>
        <p className="text-lg text-slate-500">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <hr className="py-2" />
      <ul className="flex  items-center gap-x-4 overflow-x-scroll ">
        {list.map((item, index) => (
          <li key={index} onClick={() => handleRoute(`/pages/${item.title}`)}>
            <CardOfPage image={item.src} title={item.title} />
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <p className="text-2xl font-bold">Made for You</p>
        <p className="text-lg text-slate-500">
          Your personal playlists. Updated daily.
        </p>
        <hr className="my-4" />
        <ul className="flex  items-center gap-x-4 overflow-x-scroll ">
        {list.map((item, index) => (
          <li key={index} onClick={() => handleRoute(`/pages/${item.title}`)}>
            <CardItem image={item.src} title={item.title} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Pages;
