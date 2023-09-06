import { Frame } from '@/components/smartphoneApp/common/Frame'
import { useState } from 'react'
import Button from '@/components/smartphoneApp/common/Button'
import style from '@/styles/components/smartphoneApp/startPage/accountRegistration/account.module.css'

function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        let input = e.target.value;
        // 半角数字のみを取得
        input = input.replace(/[^\d]/g, '');

        // フォーマット: "080 1234 5678"
        if (input.length >= 4) {
            input = input.slice(0, 3) + ' ' + input.slice(3);
        }
        if (input.length >= 9) {
            input = input.slice(0, 8) + ' ' + input.slice(8);
        }

        setPhoneNumber(input);
    };

    return (
        <div className={style.wrap}>
            <h2 className={style.title}>UniRideをはじめよう</h2>
            <p className={style.text}>日本国内でSMS受信可能な<br />
                電話番号を入力してください。</p>
            <input type="number"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="080 1234 5678" className={style.phoneNumber} />
            <Button disabled={false} text={'認証コードを受け取る'} mainColor={false} link={''} />
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