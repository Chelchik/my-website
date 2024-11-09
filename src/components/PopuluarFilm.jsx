import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FilmItem from './FilmItem';
import { ThemeContext } from '../context';

function PopuluarFilm() {
  const {theme, setTheme} = useContext(ThemeContext)

  const slideStyle = {
    width: "950px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    justifySelf: "center",
    backgroundColor: theme ? "#141626" : "#fff",
    gap: "5px",
    borderRadius: "10px",
    color: theme ? "#fff" : "#000",
    transition: "all 0.5s",
    }

    const imgStyle = {
    width: "550px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px 0 0 10px"
    }

  const images = [
    {
      id: Math.random(),
      url: "https://s3-alpha-sig.figma.com/img/66ab/da9a/6c497f6c1903fb1e102835e1f92c405e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zd6roJYNZUjzqF5O4bGgreXKGnu9J6imD0FF4BY2PmpMJLZizV9j6k4a3K0STYkoa8inm-qAcNuM7F3A8ye5S~7aKmj4caFYDwBxMKWEB4vQX~1wHQhxK3U0uKVJD4fuKhdwwJPERQNT1jwAp7oUI4EJSbyn~e1RC5TeHbIrUDwpEoIQ6jZ3o5K48SMjQScwKPvDmHP5X3BoByIQ4Y-biBX5PyPQ~36coPFZWQwmUIMROqawuQLLCGLseL-pfj-qJC5Brsj0DPaRZr11DbFYJ-DDW6geDGDQQjYfxO6be-ojfLkbHqtF3wWdQd9d13pSv6R7cC6-h3dS~aSFOteqCQ__",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi quidem molestias explicabo, eum commodi qui, tenetur accusantium ea perferendis similique inventore consequatur suscipit officiis modi veritatis repellendus architecto mollitia."
    },
    {
      id: Math.random(),
      url: "https://s3-alpha-sig.figma.com/img/8ae0/c59e/41ab3b8a172428a1303eac95b64d5d73?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egVKq4MdYxUA9LJkXitlqHW3O08yaK1gv-AR191jfGCWsHmvSKEBGFLiwKkhPD5E2ej44UPw5YLuuuWGvlmC71rwHe1hbq9Ro7MEBvMp0vqEQfGteHtgrXnhndUgckrpxHfuksbRMUr0lD7juZHBwJmOkpVr4wtp5440G~eMXSRYIRyq6QmDBOLMKYDf8qRXEQceitN8JwYtv9w6uDNZFI16UBT0kSxZsOiYuiB~n8M0juIYAvOVtd-FcxlJXS7EQ5qNJZ7sQIbZOt2enpD-h1U-eRptZxj5N3xloKz5a0JyBAnz2rRRbmDcdaVvoWEVoI35xblmj5y8AC9ncIKWag__",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi quidem molestias explicabo, eum commodi qui, tenetur accusantium ea perferendis similique inventore consequatur suscipit officiis modi veritatis repellendus architecto mollitia."
    },
    {
      id: Math.random(),
      url: "https://s3-alpha-sig.figma.com/img/bdc3/6211/cb0d41a5cd75acff5bef1c105e76749e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKlczplizXZzlsLtCRpgjwxKFjz-uhTcxhc~3y4axu1KEAasLcXgKxog73i6WdfQYJgiWQSIJ62SAfgfuUG1dolZ8SDjZbBanzy~sPRJgvJR2qjMdMZ46q1avhHG11uBiZqN1Q4iE6WOp1dMe75Apoln2iOmStF33aUGYLzt9pLlF0ESNwn8P5AHSpokcOI8ZPNPsfvSZkRbvuzIVxyBINOj6JZ0jHokYv315W9cwvoaw-6uPkWFzmP~urexMEAM8US7pOijHCf-XyY83dHNKiYjzpAqGsZhkqtThOYtvfFs3QiVOZYje6VVkbBGHwnhUvCLp~S8nI6jDdj2wiKDQQ__",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi quidem molestias explicabo, eum commodi qui, tenetur accusantium ea perferendis similique inventore consequatur suscipit officiis modi veritatis repellendus architecto mollitia."
    }
  ]

  return (
    <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          images.map((slide) => {
            return <SwiperSlide><FilmItem slide={slide} styles={slideStyle} imgStyle={imgStyle} /></SwiperSlide>
          })
        }
      </Swiper>
    </div>
  )
}

export default PopuluarFilm