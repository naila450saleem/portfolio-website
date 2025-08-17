import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ServicesCard from "./ServicesCard";
import PortfolioCard from "./PortfolioCard";
import ReviewCard from "./ReviewCard";
// ❌ Removed Blog import
import BlogCard from "../BlogCard"; // ✅ Correct card component
import "./GenericSlider.css";

export default function GenericSlider({ data = [], slidesPerView = 3, heightClass = "", cardType }) {
  const [isClient, setIsClient] = useState(false);

  const isReview = cardType === "review";
  const isPortfolio = cardType === "portfolio";
  const isBlog = cardType === "blog";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!Array.isArray(data)) {
    console.error("GenericSlider: `data` is not a valid array");
    return null;
  }

  if (!isClient) {
    return (
      <div className={`generic-slider-container ${heightClass}`}>
        <div className={`generic-slider-wrapper ${!isReview ? "max-width" : ""}`}>
          <div className="slider-overflow">
            {data.slice(0, 3).map((item, index) => (
              <div key={index} className="slide-item">
                {renderCard(item, cardType, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`generic-slider-container ${heightClass}`}>
      <div className={`generic-slider-wrapper ${!isReview ? "max-width" : ""}`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          centeredSlides={isReview}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: isPortfolio || isBlog || isReview ? 1 : 2, spaceBetween: 18 },
            850: { slidesPerView: isPortfolio || isBlog || isReview ? 1 : 2, spaceBetween: 20 },
            1024: { slidesPerView: isPortfolio ? 2 : Math.min(slidesPerView, 3), spaceBetween: 24 },
            1280: { slidesPerView: isPortfolio ? 2 : slidesPerView, spaceBetween: 24 },
          }}
          className="slider-swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className={isReview ? "review-slide" : "centered-slide"}
            >
              {renderCard(item, cardType, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// ✅ Separated card rendering logic for cleanliness
function renderCard(item, cardType, index) {
  switch (cardType) {
    case "hover":
      if (item.title && item.imageSrc) {
        return <ServicesCard title={item.title} imageSrc={item.imageSrc} priority={index === 0} />;
      }
      break;

    case "portfolio":
      if (item.image && item.href && item.desc) {
        return <PortfolioCard image={item.image} title={item.title} href={item.href} desc={item.desc} priority={index === 0} />;
      }
      break;

    case "review":
      if (item.rating) {
        return <ReviewCard name={item.name} role={item.role} rating={item.rating} text={item.text} />;
      }
      break;

    case "blog":
      if (item.image && item.button && item.name && item.date) {
        return <BlogCard image={item.image} button={item.button} name={item.name} date={item.date} title={item.title} priority={index === 0} />;
      }
      break;

    default:
      return null;
  }
}
