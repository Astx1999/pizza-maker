import { useState, useEffect } from "react";

import Container from "../../components/container/container";
import Checkbox from "../../components/checkbox/checkbox";
import Button from "../../components/button/button";
import { ReactComponent as ArrowLeft } from "../../images/left-arrow.svg";
import styles from "./make.module.scss";

const ingredients = [
  {
    id: "123",
    name: "Tomatoes",
    price: 200,
    img: "/ingredients/tomato.png",
  },
  {
    id: "434",
    name: "Pepperoni",
    price: 400,
    img: "/ingredients/pepperoni.png",
  },
  {
    id: "546",
    name: "Beacon",
    price: 400,
    img: "/ingredients/beacon.png",
  },
  {
    id: "754",
    name: "Red Pepper",
    price: 250,
    img: "/ingredients/red.png",
  },
  {
    id: "345",
    name: "Green Pepper",
    price: 250,
    img: "/ingredients/green.png",
  },
  {
    id: "678",
    name: "Extra Cheese",
    price: 200,
    img: "/ingredients/cheese.png",
  },
  {
    id: "986",
    name: "Mushroom",
    price: 300,
    img: "/ingredients/mushroom.png",
  },
  {
    id: "573",
    name: "Onion",
    price: 200,
    img: "/ingredients/onion.png",
  },
  {
    id: "987",
    name: "Basil",
    price: 250,
    img: "/ingredients/basil.png",
  },
  {
    id: "947",
    name: "Lettuce",
    price: 250,
    img: "/ingredients/lettuce.png",
  },
];
const Make = () => {
  const [selected, setSelected] = useState([]);
  const [total, setTotal] = useState([]);
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    selected.map((item) => {
      return (newTotal = item.price + newTotal);
    });
    if (!!active) {
      setTotal(newTotal + (active === 1 ? 1000 : 1500));
    }
  }, [selected, active]);
  return (
    <Container className={styles.root}>
      <h3 className={styles.mainTitle}>Make Your Pizza</h3>
      <div className={styles.form}>
        <div className={styles.toppings}>
          <p className={styles.title}>
            {" "}
            {!!page && (
              <div className={styles.arrowLeft} onClick={() => setPage(0)}>
                <ArrowLeft />
              </div>
            )}
            {!!page ? "Toppings" : "Size"}
          </p>
          {!!page &&
            ingredients.map((ingredient) => {
              return (
                <div key={ingredient.id} className={styles.ingredient}>
                  <Checkbox
                    name={ingredient.name}
                    onChange={() => {
                      selected.find((item) => ingredient.id === item.id)
                        ? setSelected([
                            ...selected.filter((item) => item !== ingredient),
                          ])
                        : setSelected([...selected, ingredient]);
                    }}
                    checked={
                      !!selected.find((item) => ingredient.id === item.id)
                    }
                    label={
                      <p className={styles.label}>
                        <span>{ingredient.name}</span>
                        <span>{ingredient.price} AMD</span>
                      </p>
                    }
                  />
                </div>
              );
            })}
          {!page && (
            <div className={styles.sizes}>
              <Button
                type={"blank"}
                onClick={() => {
                  if (active !== 1) {
                    setActive(1);
                    setPage(1);
                  } else {
                    setActive(0);
                    setPage(0);
                  }
                }}
                className={`${styles.size} ${
                  active === 1 ? styles.active : ""
                }`}
              >
                <span>30 սմ</span>
              </Button>
              <Button
                type={"blank"}
                onClick={() => {
                  if (active !== 2) {
                    setActive(2);
                    setPage(1);
                  } else {
                    setActive(0);
                    setPage(0);
                  }
                }}
                className={`${styles.size} ${
                  active === 2 ? styles.active : ""
                }`}
              >
                <span>35 սմ</span>
              </Button>
            </div>
          )}
        </div>
        <div className={styles.orderWrapper}>
          <div className={styles.order}>
            <p className={styles.title}>My Order</p>

            {selected.map((item) => {
              return (
                <div key={item.id} className={styles.orderItem}>
                  <p>{item.name}</p>
                  <span>{item.price} AMD</span>
                </div>
              );
            })}
            {!selected.length && (
              <p className={styles.noItems}>No Items Added</p>
            )}

            {!!active && (
              <>
                <p className={styles.dough}>
                  Dough <span> {active === 1 ? 1000 : 1500} AMD</span>
                </p>
                <div className={styles.total}>
                  Total <span>{total} AMD</span>
                </div>
              </>
            )}
          </div>
          {!!selected.length && (
            <Button className={styles.add}> Add To Bag</Button>
          )}
        </div>
      </div>
      {!!selected.length && (
        <div className={styles.imagesWrapper}>
          <h4 className={styles.ingredientTitle}>Ingredients</h4>
          <div className={styles.images}>
            {selected.map((item) => (
              <div className={styles.ingredientWrapper}>
                <img
                  className={styles.image}
                  key={item.id}
                  src={item.img}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};
export default Make;
