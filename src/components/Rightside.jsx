import React from "react";
import img1 from "../assests/pexels-ekaterina-12203460.png";
import img2 from "../assests/pexels-genaro-servín-763210.png";
import img3 from "../assests/pexels-pixabay-164455.png";
import img4 from "../assests/pexels-steve-johnson-1269968.png";
import img5 from "../assests/pexels-fiona-art-5022849.png";
import img6 from "../assests/pexels-humphrey-muleba-2045248.png";
import user1 from "../assests/pexels-anastasia-shuraeva-4406721-1.png";
import user2 from "../assests/pexels-andrea-piacquadio-3771118.png";
import user3 from "../assests/pexels-antoni-shkraba-4442102.png";
import user4 from "../assests/pexels-antoni-shkraba-4442005.png";
import overlay from "../assests/92oIvh8uL8Iyhp89pwF8mxVAFUvabeZBlfAIvykBvMJ60Ub86Z4uX08v6vY68eNsXrlmTS1wqCwg2+MMa1t_0xzmwNOQ1I7avsOFsWnO5MdJ3kPlNV+cpGxidvaz3SIg2GT7+kXtzDiwyJ7pmp5FLb-1.svg";

const cards = [
  {
    img: img1,
    userimg: user1,
    name: "Thomas Edward",
  },
  {
    img: img2,
    userimg: user2,
    name: "Chris Doe",
  },
  {
    img: img3,
    userimg: user3,
    name: "Emilie Jones",
  },
  {
    img: img4,
    userimg: user4,
    name: "Jessica Williams",
  },
  {
    img: img5,
    userimg: user1,
    name: "Jagdish Choudhary",
  },
  {
    img: img6,
    userimg: user2,
    name: "Lara Leones",
  },
  {
    img: img1,
    userimg: user1,
    name: "Thomas Edward",
  },
  {
    img: img2,
    userimg: user2,
    name: "Chris Doe",
  },
  {
    img: img3,
    userimg: user3,
    name: "Emilie Jones",
  },
  {
    img: img4,
    userimg: user4,
    name: "Jessica Williams",
  },
  {
    img: img5,
    userimg: user1,
    name: "Jagdish Choudhary",
  },
  {
    img: img6,
    userimg: user2,
    name: "Lara Leones",
  },
  {
    img: img1,
    userimg: user1,
    name: "Thomas Edward",
  },
  {
    img: img2,
    userimg: user2,
    name: "Chris Doe",
  },
  {
    img: img3,
    userimg: user3,
    name: "Emilie Jones",
  },
  {
    img: img4,
    userimg: user4,
    name: "Jessica Williams",
  },
  {
    img: img5,
    userimg: user1,
    name: "Jagdish Choudhary",
  },
  {
    img: img6,
    userimg: user2,
    name: "Lara Leones",
  },
  {
    img: img1,
    userimg: user1,
    name: "Thomas Edward",
  },
  {
    img: img2,
    userimg: user2,
    name: "Chris Doe",
  },
  {
    img: img3,
    userimg: user3,
    name: "Emilie Jones",
  },
  {
    img: img4,
    userimg: user4,
    name: "Jessica Williams",
  },
  {
    img: img5,
    userimg: user1,
    name: "Jagdish Choudhary",
  },
  {
    img: img6,
    userimg: user2,
    name: "Lara Leones",
  },
];

const Rightside = () => {
  return (
    <div className=" max-w-[260px] w-full">
      <div className="flex flex-col h-[80.3vh]">
        <div className="flex h-[4%] space-x-5">
          <h1>Artists</h1>
          <h1>Photographers</h1>
        </div>
        <div className="h-[96%] overflow-y-auto artistcol">
          <div className="flex flex-col space-y-[30px] mr-2">
            {cards.map((card, index) => (
              <div
                className="h-[126px] overflow-hidden w-full rounded-lg relative"
                key={index}
              >
                <img src={card.img} alt="artist img" className="object-cover" />
                <img
                  src={overlay}
                  alt="overlay img"
                  className="absolute bottom-0"
                />
                <img
                  src={card.userimg}
                  alt="user img"
                  className="absolute bottom-[15px] left-[15px]"
                />
                <span className="absolute bottom-[54px] left-[54px] h-[12px] w-[12px] rounded-full border-2 border-white bg-[#0EC297]"></span>
                <div className="text-white absolute bottom-[15px] h-[50px] flex flex-col justify-evenly left-[80px]">
                  <h1 className="font-semibold">{card.name}</h1>
                  <p className="text-xs">@thewildwithyou</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <h1 className="text-xs">Privacy</h1>
        <h1 className="text-xs">Terms of Service</h1>
        <h1 className="text-xs">Cookie Notice</h1>
      </div>
    </div>
  );
};

export default Rightside;
