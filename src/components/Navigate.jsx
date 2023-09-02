import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tabs } from "antd";
import "swiper/css";

import "swiper/css/navigation";
import { useState } from "react";

function Navigate() {
  const listNavbarItems = [
    {
      imgUrl: "./images/hot-nhat.png",
      name: "hot nhất",
    },
    {
      imgUrl: "./images/casino.png",
      name: "casino",
    },
    {
      imgUrl: "./images/no-hu.png",
      name: "nổ hủ",
    },
    {
      imgUrl: "./images/ban-ca.png",
      name: "bắn cá",
    },
    {
      imgUrl: "./images/the-thao.png",
      name: "thể thao",
    },
    {
      imgUrl: "./images/game-bai.png",
      name: "game bài",
    },
    {
      imgUrl: "./images/xoso.png",
      name: "xổ số",
    },
    {
      imgUrl: "./images/da-ga.png",
      name: "đá gà",
    },
  ];

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key.toString());
  };

  // const handleSlideChange = (swiper) => {
  //   // Lấy index của slide hiện tại
  //   const currentIndex = swiper.activeIndex;
  //   // Chuyển index slide sang key của tab và cập nhật activeTab
  //   handleTabChange((currentIndex + 1).toString());
  // };

  return (
    <div className="h-[70px]">
      <Swiper
        className="bg-[#25ccff] h-full flex items-center"
        spaceBetween={0}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        // onSlideChange={handleSlideChange}
      >
        <div className="w-[94%] overflow-hidden">
          {listNavbarItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-full flex flex-col items-center justify-center ${
                  parseInt(activeTab) === index + 1 && "bg-active-navbar"
                }`}
                onClick={() => handleTabChange(index + 1)}
              >
                <img
                  className="h-[28%] mb-2"
                  src={item.imgUrl}
                  alt={item.name}
                />
                <span className="text-[0.6rem] text-white uppercase">
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <Tabs
        className=""
        activeKey={activeTab}
        onChange={handleTabChange}
        centered
        items={[
          {
            key: "1",
            children: "Content of Tab 1",
          },
          {
            key: "2",
            children: "Content of Tab 2",
          },
          {
            key: "3",
            children: "Content of Tab 3",
          },
          {
            key: "4",
            children: "Content of Tab 4",
          },
          {
            key: "5",
            children: "Content of Tab 5",
          },
          {
            key: "6",
            children: "Content of Tab 6",
          },
          {
            key: "7",
            children: "Content of Tab 7",
          },
          {
            key: "8",
            children: "Content of Tab 8",
          },
        ]}
      ></Tabs>
    </div>
  );
}

export default Navigate;
