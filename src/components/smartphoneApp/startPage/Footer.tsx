import { log } from 'console'
import { useState } from 'react'
import style from '@/styles/components/smartphoneApp/startPage/footer.module.css'
import Button from '@/components/smartphoneApp/common/Button'


export type props = {
    text: string
}

export default function Footer() {
    return (
        <>
            <div className={style.wrap}>
                <Button disabled={false} text={'UniRideを利用する'} mainColor={true} />


            </div>
        </>
    )
}