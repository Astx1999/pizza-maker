import styles from "./bag.module.scss";
import Container from "../../components/container/container";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { ReactComponent as Arrow } from "../../images/down-arrow.svg";
import { ReactComponent as Cross } from "../../images/closeMenu.svg";
import { ReactComponent as Plus } from "../../images/plus.svg";
import { ReactComponent as Minus } from "../../images/minus.svg";
import { useSelector, useDispatch } from "react-redux";
import { bagItemsSelector, bagTotalSelector } from "../../state/selectors";
import Button from "../../components/button/button";
import { Link } from "@reach/router";
import {
  minusItemAC,
  plusItemAC,
  removeFromCartAC,
} from "../../state/bag/bag.action";
import Radio from "../../components/radio/radio";

const Bag = () => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => bagItemsSelector(store));
  const total = useSelector((store) => bagTotalSelector(store));
  const [, setData] = useState(null);
  const [deliveryType, setDeliveryType] = useState(0);
  useEffect(() => {
    getAllProducts().then((r) => {
      setData(r);
    });
  }, []);
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div>
          <Link to={"/menu"} className={styles.back}>
            <Arrow /> Back to menu
          </Link>
          <h3 className={styles.mainTitle}>Bag</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.tableHead}>
              <span className={styles.headTitle}>Product List</span>
              <span className={styles.headTitle}> Quantity </span>
              <span className={styles.headTitle}> Price </span>
            </div>
            {bagItems.length ? (
              bagItems.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.info}>
                    <img
                      className={styles.image}
                      src={`/menu/${item.image}`}
                      alt=""
                    />
                    <div className={styles.textWrapper}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.ingredients}>{item.ingredients}</p>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() => {
                        dispatch(minusItemAC(item.id));
                      }}
                    >
                      <Minus />
                    </div>
                    <div className={styles.count}> {item.count}</div>
                    <div
                      className={styles.plus}
                      onClick={() => {
                        dispatch(plusItemAC(item.id));
                      }}
                    >
                      <Plus />
                    </div>
                  </div>
                  <p className={styles.price}>{item.price} AMD</p>
                  <div
                    className={styles.remove}
                    onClick={() => {
                      dispatch(removeFromCartAC(item.id));
                    }}
                  >
                    <Cross />
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noItems}>No items found</p>
            )}
          </div>

          <div className={styles.total}>
            <span className={styles.method}>Payment Method</span>
            <div className={styles.radios}>
              <Radio
                name="Cash"
                id={1}
                checked={deliveryType === 1}
                onChange={() => {
                  setDeliveryType(1);
                }}
                label="Cash"
              />
              <Radio
                name="Terminal"
                id={2}
                checked={deliveryType === 2}
                onChange={() => {
                  setDeliveryType(2);
                }}
                label="Terminal"
              />
              <Radio
                name="Online"
                id={3}
                checked={deliveryType === 3}
                onChange={() => {
                  setDeliveryType(3);
                }}
                label="Online"
              />
            </div>

            <div className={styles.line}>
              <span>Items subtotal:</span> <span>{total} AMD</span>
            </div>
            {!!total && (
              <div className={styles.line}>
                <span>Delivery fee:</span> <span>600 AMD</span>
              </div>
            )}
            <div className={styles.lineTotal}>
              <span>Total:</span>
              <span>{total ? total + 600 : total} AMD</span>
            </div>
            <Button full disable={!deliveryType || !bagItems.length}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Bag;
