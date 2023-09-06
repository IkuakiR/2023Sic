import { Frame } from '@/components/smartphoneApp/common/Frame'
import { useState, useEffect } from 'react'
import Button from '@/components/smartphoneApp/common/Button'
import style from '@/styles/components/smartphoneApp/startPage/accountRegistration/account.module.css'

function PhoneNumber() {
    // 電話番号のstate
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^\d]/g, '');

        // 11桁の電話番号09000000000を090 0000 0000の形式に整形する
        const format = (str: string) => [
            // 最初の3桁を切り出し
            str.slice(0, 3),
            // 次の4桁を切り出し
            str.slice(3, 7),
            // 最後の4桁を切り出し
            str.slice(7, 11),
            // undefinedや空の文字列を取り除き、切り出した3パーツを半角スペースで結合
        ].filter(Boolean).join(' ');

        // stateの変更にはset~~を用いる。
        setPhoneNumber(format(value.slice(0, 11)));
    };


    return (
        <div className={style.wrap}>
            <h2 className={style.title}>UniRideをはじめよう</h2>
            <p className={style.text}>日本国内でSMS受信可能な<br />
                電話番号を入力してください。</p>
            <input
                type="text"
                placeholder="080 1234 5678"
                value={phoneNumber}
                onChange={handleInputChange}
                maxLength={13}
                className={style.phoneNumber}
            />

            <Button disabled={phoneNumber.length === 13 ? false : true} text={'認証コードを受け取る'} mainColor={false} link={''} />
        </div>
    )
}

export default function Page() {
    return (
        <Frame>
            <button className={`${style.prev} pi pi-angle-left`}>
            </button>
            <PhoneNumber />
        </Frame>
    )
}