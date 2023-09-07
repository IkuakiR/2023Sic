import { log } from "console";
import { useState } from "react";
import style from "@/styles/components/smartphoneApp/startPage/button.module.css";

export type props = {
  text: string;
};

export default function Button() {
  return (
    <>
      <div className={style.wrap}>
        <p>UniRideを利用する</p>
      </div>
    </>
  );
}
