"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState("");
  const inputRef = useRef(null);

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleInputChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImg && <p>No image picked yet.</p>}
          {pickedImg && <Image src={pickedImg} alt="Preview" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleInputChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
