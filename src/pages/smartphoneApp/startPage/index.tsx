import { useState } from 'react'
import Footer from '@/components/smartphoneApp/startPage/Footer'
import style from '@/styles/components/smartphoneApp/startPage/main.module.css'

export default function Page() {
    return (
        <div className={style.wrap}>
            <main className={style.mainWrap}>
                <h1>終電なくてももう安心。</h1>
                <p>UniRideで割り勘しちゃおう。</p>
                <p>好きなスポットを選んでマッチングしよう。</p>

            </main>
            <Footer />
        </div>
    )
}