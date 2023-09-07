import { useState } from "react";
import Footer from "@/components/smartphoneApp/startPage/Footer";
import style from "@/styles/components/smartphoneApp/startPage/main.module.css";
import { Phone } from "@/components/smartphoneApp/startPage/Phone";
import { Frame } from "@/components/smartphoneApp/common/Frame";

export default function Page() {
  return (
    <Frame>
      <main className={style.mainWrap}>
        <div className={style.titleWrap}>
          <h1>終電なくてももう安心。</h1>
          <p>UniRideで割り勘しちゃおう。</p>
          <p>好きなスポットを選んでマッチングしよう。</p>
        </div>

        <Phone />
      </main>
      <Footer />
    </Frame>
  );
}
