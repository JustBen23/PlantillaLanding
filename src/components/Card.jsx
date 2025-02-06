import { Link } from "react-router-dom";
import Aos from "aos";

import "aos/dist/aos.css";
import "../styles/Card.css";

export const Card = (props) => {
  return (
    <>
      <li
        className="card_item"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="850"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <Link className="card_item-link" to={props.path}>
          <figure className="card_item_pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="card_item_img" />
          </figure>
          <div className="card_item_info">
            <h5 className="card_item_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
