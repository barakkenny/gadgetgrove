import React, { useState, useEffect } from "react";
import { gadgetData } from "../utils/data";
// import { Link } from "react-router-dom";
import "./Body.css";
import Shimmer from "./Shimmer";

function Body() {
  const [electronicStore, setElectronicStore] = useState(gadgetData);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchGadgetData();
  }, []);

  function fetchGadgetData() {
    setElectronicStore(gadgetData.slice(0, 8));
    setError(error)
  }

  return (
    <section className="body__container">
      <section className="body__content">
        <section className="content__one">
          <h2>Your One-Stop Electronic Market</h2>
          <p>
            Welcome to e-shop, a place where you can buy everything about
            electronics. Sale every day!
          </p>
          <button className="shop__now" type="button">
            Shop Now
          </button>
        </section>
        <section className="content__two">
          <img className="gadget__image" src="Gadget.png" alt="electronics images" />
        </section>
      </section>

      <section className="items__card__container">
        {error ? (
          <Shimmer />
        ) : (
          electronicStore.map((res) => {
            const { id, name } = res;
            return (
              <section className="items__card__content" key={id}>
                <img className="items__image" src="cool-gadget.png" alt="" />
                <section className="items">
                  <li>{name.slice(0, 20)}</li>
                </section>
              </section>
            );
          })
        )}
      </section>
    </section>
  );
}

export default Body;
