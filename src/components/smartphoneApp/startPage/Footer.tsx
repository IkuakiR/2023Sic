<<<<<<< HEAD
import { useState } from 'react'
import style from '@/styles/components/smartphoneApp/startPage/footer.module.css'
import Button from '@/components/smartphoneApp/common/Button'
=======
import { log } from "console";
import { useState } from "react";
import style from "@/styles/components/smartphoneApp/startPage/footer.module.css";
import styles from "@/styles/components/smartphoneApp/startPage/header.module.css";
import Button from "@/components/smartphoneApp/startPage/Button";
>>>>>>> e842aa5 (create button)

export type props = {
  text: string;
};

export default function Footer() {
    return (
        <>
            <div className={style.wrap}>
                <Button disabled={false} text={'UniRideを利用する'} mainColor={true} link={'/smartphoneApp/startPage/accountRegistration'} />
                <a href='#' className={style.already}>既にアカウントをお持ちの方</a>

            </div>
        </>
    )
}
