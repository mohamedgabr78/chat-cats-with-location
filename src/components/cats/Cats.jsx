import { useEffect, useState } from "react";
import "./Cats.scss";
import axios from "axios";
import loader from "../../images/loader.gif";

function Cats() {
  const [imageURL, setImageURL] = useState({ url_1: null, url_2: null });
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState({ url_1: false, url_2: false });
  const handelClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    setLoading({ url_1: true, url_2: true });
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setImageURL((imageURL) => {
          return { ...imageURL, url_1: res.data[0].url };
        });
        setLoading({ ...loading, url_1: false });
      })
      .catch((err) => {
        console.log(err);
        setLoading({ ...loading, url_1: false });
      });
    axios
      .get(" https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setImageURL((imageURL) => {
          return { ...imageURL, url_2: res.data[0].url };
        });
        setLoading({ ...loading, url_2: false });
      })
      .catch((err) => {
        console.log(err);
        setLoading({ ...loading, url_2: false });
      });
    console.log("here");
  }, [click]);

  return (
    <div className="cats">
      <div className="images">
        {Object.keys(imageURL).map((key, index) => {
          return (
            <div className="single-image" key={index}>
              {loading[key] && (
                <div className="loader">
                  <img src={loader} alt="loader" />
                </div>
              )}
              <img src={imageURL[key]} alt="cute_cat_pic" />
            </div>
          );
        })}
      </div>
      <div className="change-btn">
        <button
          onClick={() => {
            handelClick();
          }}
          className="btn"
        >
          get other cute cat photos!!!
        </button>
      </div>
    </div>
  );
}

export default Cats;
