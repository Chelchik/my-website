import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FilmItem from './FilmItem';
import { ThemeContext } from '../context';
import { useContext } from 'react';

function FilmsSwiper() {
    const {theme, setTheme} = useContext(ThemeContext)

    const imgStyle = {
      width: "250px",
      height: "350px",
      objectFit: "cover",
      borderRadius: "10px"  
    }

    const films = [
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/939c/efd3/01cb417b85fe6d44ef07c6d5e42b8c7b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mk8mh6kDrJmTKxVbJvRSqtLV1N7eL~mrn6X5npZTi-U15tdfZmEQUUKah3rPL8cW-Cz628IUxXXDmt7qbsVi4qrnchyvFIdbffUF~hemJYO2RzQQvx2F6TVHCVa3rfIfj6X3psCpg-lxkSD8dJ0ModGVyO8uTHvVNCOY1llgL9KeI4E5BoCUGQ1wbjTT2AJUo5X2sSG5X0NjDTs4ESqM-DmKgPyxCqMkg6KeAHV0s8UlFAQt1I1a4sx3wgH~WIqpbjiwkmnkikkue6u7LyfCtiMnYDgzC7CoFMYVz0WD0z5q78ooTHlhnHeFa6SjBA44pjvjR84Hj1YkeBefy76JnQ__"
        },
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/f8df/f918/f64f5511f179aec8c2a11fb4712f7869?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhGpUSHBYd-ZSFR41opd1aa~3emdBIKSEbZ~FvaerofE9XDNn6iLOJ3O6iXW-JkY7yBhtFHf1nyLGFY9Zuh-8DcuYU85ej33tQkSjHpcB-VwsZNWCswQt5gJ24oDAW9NCXKmGJuMNutmm4GmSigG7El1vx7CQZv20IFi3Bi9yjqp8XitvV2oAJyIXaWigeUxduIwG-a6Np2iXPnvT7-EV8lDHPKfX3EWsmD3aiACIIVEx~bE8gsDkoria5PgIvToX6yYCY713VCXLMrNYH8B6-uxOt2EcQ~Df9RwLxf5h3gACgpkI6iI80TixjG-wRowtXf5xioqGGFzzghYDHVnaw__"
        },
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/61f6/2f69/f403c8f11f0928b056a82a286362dc33?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EmFmCPxWbi76t10NAxjlEQHTXsSii1nNWzLpczLY-7TCEem~ASOvXUaXS4Lmf8T~HZ4lmnbxeQobcPTj2VjXZoE3odeWGSRWH~xpIB9~gwhEX4lpxwp4Ep9ZegMLKYHqMsvNYNh0BjGvaliniotVu0OSry7JVxrdJfS4hukoMc2gTgYut~d70gAKzp1P77pDRMT-Yj0gNRHvjluuYbglPKSVpv6tZ2ziQauKYUfu8bzCpWqvwC9rYnGackLlz7Htsnpxai8G8R5nXbYv6c~Fj3cp0NFTNuLZwr3UnLU8y2bAy4L0EX5j5rapETJppbnr4cgebKP9UhDTu1a7sLKdNw__"
        },
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/bdc3/6211/cb0d41a5cd75acff5bef1c105e76749e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKlczplizXZzlsLtCRpgjwxKFjz-uhTcxhc~3y4axu1KEAasLcXgKxog73i6WdfQYJgiWQSIJ62SAfgfuUG1dolZ8SDjZbBanzy~sPRJgvJR2qjMdMZ46q1avhHG11uBiZqN1Q4iE6WOp1dMe75Apoln2iOmStF33aUGYLzt9pLlF0ESNwn8P5AHSpokcOI8ZPNPsfvSZkRbvuzIVxyBINOj6JZ0jHokYv315W9cwvoaw-6uPkWFzmP~urexMEAM8US7pOijHCf-XyY83dHNKiYjzpAqGsZhkqtThOYtvfFs3QiVOZYje6VVkbBGHwnhUvCLp~S8nI6jDdj2wiKDQQ__"
        },
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/9c4b/879c/69738fe246762c1ce619eb6b1d8fd9ef?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDmI32pYjO8QrlCwldMkdaXS7PhD~2S2w49Qaki57IcJQLIrHXPugTNTW4HaQ4soJC29qv5kpgbHR-mh0bVFMSaExO0PMNW0MKzoR-49Ns~I-l8sUh4pbvSgUNa3O-Ds0XPwCpuGCa9wnKFc00oWikccCz4Yg-d03RVa91hgz-QP7iN-r--~GJLiBWR86ceWNrr2a6WregfXlOIeyqSlD~V3VOYMGDgNC0VSeN8lvd7esYWOIKLxhOHy4nFpkPu-n7KWZPNiRg33ZKXU-jWdeZbXfMMMl3uaoZ0FcKUibZt7yEA3NfTu30fnEa~GXDqr0DMf2euoaVp8oQZyKvGIqg__"
        },
        {
            id: Math.random(),
            url: "https://s3-alpha-sig.figma.com/img/0044/0767/21a9873095e24284b96e65d359884ee9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kMKYzjJR1zQv0qdrSGdoOEoZkQpiVFSngbHF4cb9NFMo0uT4TpJcHOl6HJzSxTHqGkH0gTH7J9X8hcrGwWwX4RjwMa23jiXononBa~UMVNkogeolRxTN6idHtYXkTyG-hltXddR-iMbuiQ9ex7qmkeS~Wp1hDzAZbnlBVa3VzoCqEC3nrZFe5Q5fyaPppF~Jk3P1xagqVONkgRTd8x1APS78Wlub8j2PGd1jQfg3OSDKqyHn7-JRsfniEjLYDrscpIUL049fqdzy1JiQ8RLIRHkRPWhWqzSpwlpeyzBfMdGEU9UCaTk1ltER8G6HTx0WaLAXaiF4N~WVhtjlGCD55g__"
        },
    ]

  return (
    <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          films.map((slide) => {
            return <SwiperSlide><FilmItem slide={slide} imgStyle={imgStyle} /></SwiperSlide>
          }) 
        }
      </Swiper>
    </div>
  )
}

export default FilmsSwiper