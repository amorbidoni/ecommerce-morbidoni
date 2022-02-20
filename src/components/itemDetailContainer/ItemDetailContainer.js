import React, { useEffect, useState } from "react";
import { ItemDetailApp } from "./ItemDetail";
import img from "../../assets/images";
import { useParams } from "react-router-dom";

const item = [
  {
    id: "001",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. En boca es pleno, de taninos muy agradables, y suaves.",
    price: 100,
    stock: 10,
    image: img.almaNegraTrans,
  },
  {
    id: "002",
    name: "Andillian",
    specifications: "Cabernet Franc",
    detail: "",
    price: 1530,
    stock: 10,
    image: img.andillianCF,
  },
  {
    id: "003",
    name: "Animal",
    specifications: "Tinto",
    detail: "",
    price: 900,
    stock: 10,
    image: img.animalTrans,
  },
  {
    id: "004",
    name: "Antigal Uno",
    specifications: "Cabernet Sauvignon",
    detail: "",
    price: 1200,
    stock: 10,
    image: img.antigalUnoCS,
  },
  {
    id: "008",
    name: "Bendito Pecado",
    specifications: "Cabernet Sauvignon",
    detail: "",
    price: 800,
    stock: 10,
    image: img.benditoPecadoCF,
  },
  {
    id: "005",
    name: "Bendito Pecado",
    specifications: "Malbec",
    detail: "",
    price: 800,
    stock: 10,
    image: img.benditoPecadoMalbec,
  },
  {
    id: "006",
    name: "Biribiri Reserva",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.biribiriReservaTrans,
  },
  {
    id: "007",
    name: "Capítulo Siete",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
];
const getProductos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, 2000);
    if (error) {
      reject(new error("Error en la promesa"));
    }
  });
};
const ItemDetailContainerApp = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    let requestitem = getProductos();
    requestitem
      .then((res) => {
        res = res.filter((e) => e.id === id);
        setItem(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log("item: ", item);
  return (
    <>
      {loading && <h1>Cargando...</h1>}
      <section className="item-list-container">
        <ItemDetailApp item={item} />
      </section>
    </>
  );
};

export default ItemDetailContainerApp;