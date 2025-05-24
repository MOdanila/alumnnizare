import React, { useState, useEffect } from "react";
import img1 from "../poze/pozetotal/1.jpg";
import img2 from "../poze/pozetotal/2.jpg";
import img3 from "../poze/pozetotal/3.jpg";
import img4 from "../poze/pozetotal/4.jpg";
import img5 from "../poze/pozetotal/5.jpg";
import img6 from "../poze/pozetotal/6.jpg";
import img7 from "../poze/pozetotal/7.jpg";
import img8 from "../poze/pozetotal/8.jpg";
import img9 from "../poze/pozetotal/9.jpg";
import img10 from "../poze/pozetotal/10.jpg";
import img11 from "../poze/pozetotal/11.jpeg";
import img12 from "../poze/pozetotal/12.jpg";
import img13 from "../poze/pozetotal/13.jpg";
import img14 from "../poze/pozetotal/14.jpg";
import img15 from "../poze/pozetotal/15.jpg";
import img16 from "../poze/pozetotal/16.jpg";
import img17 from "../poze/pozetotal/17.jpg";
import img18 from "../poze/pozetotal/18.jpg";
import img19 from "../poze/pozetotal/19.jpg";
import img20 from "../poze/pozetotal/20.png";
import img21 from "../poze/pozetotal/21.jpg";
import img22 from "../poze/pozetotal/22.jpg";
import img23 from "../poze/pozetotal/23.jpg";
import img24 from "../poze/pozetotal/24.jpg";
import img25 from "../poze/pozetotal/25.jpg";
import img26 from "../poze/pozetotal/26.jpg";
import img27 from "../poze/pozetotal/27.jpg";
import img28 from "../poze/pozetotal/28.jpg";
import img29 from "../poze/pozetotal/29.jpg";
import img30 from "../poze/pozetotal/30.jpg";
import img31 from "../poze/pozetotal/31.jpg";
import img32 from "../poze/pozetotal/32.jpg";
import Modal from "react-modal";
function Poze() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          src={image}
          key={index}
          onClick={() => {
            const imageUrl = image.split("/").pop();
            if (imageUrl === "12.jpg") {
              window.location.href =
                "https://www.cinemacity.ro/films/sirenele-secretul-medalionului/7241o2r#/buy-tickets-by-film?in-cinema=1829&at=2025-05-24&for-movie=7241o2r&view-mode=list";
            } else if (imageUrl === "2.png") {
              window.location.href = "https://example.com/image2";
            } else {
              handleImageClick(image);
            }
          }}
          alt={`Image ${index}`}
          className="image"
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "800px",
            maxHeight: "600px",
            margin: "40px auto",
            padding: "20px",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <img
          src={selectedImage}
          alt="Selected Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Modal>
    </div>
  );
}

export default Poze;
