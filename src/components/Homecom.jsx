import React from 'react';
import lara from "../assests/pexels-ali-pazani-2613260.png";
import larapost from "../assests/pexels-humphrey-muleba-2045248@2x.png";
import thomas from "../assests/pexels-imad-clicks-9810659.png";
import thomaspost from "../assests/pexels-tobias-bjørkli-2236382@2x.png";
import heart from "../assests/heart.svg";
import heart2 from "../assests/heart-3.svg";
import comment from "../assests/comment.svg";
import share from "../assests/share.svg";
import img1 from "../assests/pexels-pixabay-164455-1.png";
import img2 from "../assests/Image 40.png";
import img3 from "../assests/Image 39@2x.png";
import img4 from "../assests/pexels-max-vakhtbovych-6782342.png";
import star from "../assests/star.svg";

const posts = [
  {
    name: "Lara Leones",
    username: "@thewallart",
    caption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    profile: lara,
    post: larapost,
  },
  {
    name: "Thomas J.",
    username: "@thecustomcreater",
    caption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    profile: thomas,
    post: thomaspost,
  },
];

const cards = [img1, img2, img3, img4];

const Homecom = () => {
  return (
    <div className="timeline max-w-[620px] h-[84vh] w-full overflow-y-auto flex-grow flex-col space-y-[30px]">
      {posts.map((post, index) => {
        return (
          <div
            className="w-full h-[600px] bg-white rounded-lg py-[30px] flex flex-col space-y-[30px]"
            key={index}
          >
            <div className="w-full flex justify-between items-center px-[30px]">
              <div className="flex">
                <div>
                  <img
                    src={post.profile}
                    alt={`${post.name}'s profile picture`}
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-[#101010] font-semibold text-lg">
                    {post.name}
                  </h1>
                  <p className="text-[#8D8D8D] text-sm">{post.username}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="h-[4px] w-[4px] rounded-full bg-black"></span>
                <span className="h-[4px] w-[4px] rounded-full bg-black"></span>
                <span className="h-[4px] w-[4px] rounded-full bg-black"></span>
              </div>
            </div>
            <p className="text-sm text-[#101010] px-[30px]">
              {post.caption} <span className="text-[#FF5E8A]"> Read More</span>
            </p>
            <div className="px-[30px] relative">
              <img
                src={post.post}
                alt={`${post.name}'s post`}
                className="max-w-[560px] w-full h-[306px] object-cover rounded-lg"
              />
              <img
                src={heart}
                alt="heart icon"
                className="z-99 absolute top-[30px] right-[60px]"
              />
            </div>
            <span className="h-[2px] bg-[#F3F3F3] w-full"></span>
            <div className="px-[30px] flex space-x-3">
              <div className="flex">
                <img src={heart2} alt="like" />
                <p className="text-[#101010] font-bold text-sm ml-2">9.8k</p>
              </div>
              <div className="flex">
                <img src={comment} alt="like" />
                <p className="text-[#101010] font-bold text-sm ml-2">8.6k</p>
              </div>
              <div className="flex">
                <img src={share} alt="like" />
                <p className="text-[#101010] font-bold text-sm ml-2">7.2k</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex timelinecard w-full h-[400px] overflow-x-auto space-x-[15px]">
        <div className="timelineinner flex space-x-[18px]">
          {cards.map((card, index) => (
            <div className="w-[256px]" key={index}>
              <img
                src={card}
                alt="img"
                className="w-full h-[180px] rounded-lg object-cover"
              />
              <h1 className="text-sm mt-[14px] font-semibold text-[#101010]">
                Modern Wall Decor Framed Painting
              </h1>
              <div className="flex w-full justify-between items-center mt-[8px]">
                <h1 className="text-xl font-semibold">$199.99</h1>
                <div className="flex space-x-1">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homecom