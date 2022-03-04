import React, { useState } from "react";
import Button from "../../components/button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import "swiper/swiper.min.css";
import Pizza from "../../images/pizza.png";

import Container from "../../components/container/container";

import styles from "./home.module.scss";
import Product from "../../components/product/product";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { addToBagAC } from "../../state/bag/bag.action";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.root}>
      <Container className={styles.banner}>
        <div>
          <img src={Pizza} className={styles.image} alt="" />
        </div>
        <div>
          <p className={styles.title}>Make Your Pizza With Pizza Maker</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur iusto laboriosam laudantium perferendis quasi quisquam,
            suscipit. Aut, dolore ex facilis fugiat labore maiores nihil nisi
            odit possimus quia, repellendus vel!
          </p>
          <Button className={styles.btn} onClick={() => navigate("/make")}>
            Make a Pizza
          </Button>
        </div>
      </Container>

      <Container className={styles.carousel}>
        <p className={styles.section}>Best Sellers</p>
        <Swiper
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
          }}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          updateOnWindowResize={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1.5,
            },
          }}
        >
          {!!data &&
            data.map((pizza) => {
              return (
                pizza.id <= 5 && (
                  <SwiperSlide key={pizza.id}>
                    <Product
                      data={pizza}
                      onAdd={(size) => {
                        dispatch(
                          addToBagAC({
                            id: pizza.id,
                            image: pizza.image,
                            name: pizza.name,
                            ingredients: pizza.ingredients,
                            size: size === 1 ? "30" : "35",
                            price: pizza.price,
                            count: 1,
                          })
                        );
                      }}
                    />
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Home;
