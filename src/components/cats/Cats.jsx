import { useEffect, useState } from "react";
import "./Cats.scss";
import axios from "axios";
function Cats() {
  const [imageURL, setImageURL] = useState({ url_1: null, url_2: null });

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setImageURL((imageURL) => {
          return { ...imageURL, url_1: res.data[0].url };
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(" https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setImageURL((imageURL) => {
          return { ...imageURL, url_2: res.data[0].url };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let urlKeys = Object.keys(imageURL);

  urlKeys.map((key) => {
    console.log(imageURL[key]);
  });

  console.log(imageURL);
  return (
    <div className="cats">
      <div className="images">
        {Object.keys(imageURL).map((key, index) => {
          return <img src={imageURL[key]} key={index} alt="cute_cat_pic" />;
        })}
      </div>
      <div className="change-btn">
        <button>get other cute cat photos!!!</button>
      </div>
    </div>
  );
}

export default Cats;
