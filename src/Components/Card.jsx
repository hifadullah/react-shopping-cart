import React from "react";
import { FaStar } from "react-icons/fa6";
const Card = ({ products, setCount, count, cart, setCart }) => {
  const handleAdd = () => {
    setCount((initialInc) => initialInc + 1);
  };
  const handleRemove = () => {
    if(count>0){
        setCount((initialDec) => initialDec - 1);
    }
    
  };
  const handleClick = (id) => {
    if (cart.includes(id)) {
      let newCart = cart.filter((element) => element !== id);
      console.log(newCart)
      setCart(newCart);
      handleRemove();
    } else {
      cart.push(id);
    console.log(cart)
      handleAdd();
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((element, index) => {
              return (
                
                  <div key={element.id}>
                    {element.enable ? (
                      <div className="col mb-5" style={{height:"360px"}} >
                        <div className="card h-100 overflow-hidden">
                          {/* <!-- Sale badge--> */}
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            Sale
                          </div>
                          {/* <!-- Product image--> */}
                          <img
                            className="card-img-top"
                            src={element.image}
                            alt="..."
                          />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                            <div className="text-center">
                              {/* <!-- Product name--> */}
                              <h5 className="fw-bolder">{element.name}</h5>
                              {/* <!-- Product reviews--> */}
                              <div className="d-flex justify-content-center small text-warning mb-">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                              {/* <!-- Product price--> */}
                              <span className="text-muted text-decoration-line-through">
                                ${element.price}
                              </span>
                              ${element.priceDrop}
                            </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button
                                className="btn btn-outline-dark mt-auto"
                                onClick={() => {
                                  handleClick(element.id);
                                }}
                                
                              >
                                {cart.includes(element.id)
                                  ? "Remove from cart"
                                  : "Add to card"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="col mb-5 " style={{height:"360px"}} >
                        <div className="card h-100 overflow-hidden" >
                          {/* <!-- Product image--> */}
                          <img
                            className="card-img-top"
                            src={element.image}
                            alt="..."
                          />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                            <div className="text-center">
                              {/* <!-- Product name--> */}
                              <h5 className="fw-bolder">{element.name}</h5>
                              {/* <!-- Product price--> */}
                              ${element.price} - 
                              ${element.priceDrop}
                            </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button
                                className="btn btn-outline-dark mt-auto"
                                onClick={() => {
                                  handleClick(element.id);
                                }}
                                
                              >
                                {cart.includes(element.id)
                                  ? "Remove from cart"
                                  : "Add to card"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;