import { Frame } from '@/components/smartphoneApp/common/Frame'
import { useState, useEffect } from 'react'
import Button from '@/components/smartphoneApp/common/Button'
import style from '@/styles/components/smartphoneApp/startPage/accountRegistration/account.module.css'

export type name = {
    pageState: number,
    setPageState: React.Dispatch<React.SetStateAction<number>>
}

function PhoneNumber(props: name) {
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

    // 何らかの処理、例えばページ状態を1増やす
    const handleSomething = () => {
        props.setPageState(props.pageState + 1);
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

            <Button disabled={phoneNumber.length === 13 ? false : true}
                text={'認証コードを受け取る'}
                mainColor={false}
                link={''}
                onClick={() => { handleSomething }} />
        </div>
    )
}

function Authentication() {

    return (
        <div className={style.wrap}>
            <h2 className={style.title}>認証コードを入力</h2>
            <p className={style.text}>080-1234-5678 にSMSで送信された<br />
                4桁の認証コードを入力して下さい。</p>
        </div>
    )
}

export default function Page() {
    const [pageState, setPageState] = useState<number>(0)

    return (
        <Frame>
            <p>{pageState}</p>
            <button className={`${style.prev} pi pi-angle-left`}>
            </button>
            <PhoneNumber pageState={pageState} setPageState={setPageState} />
        </Frame>
    )
}