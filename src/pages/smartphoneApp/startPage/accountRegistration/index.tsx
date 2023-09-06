import { Frame } from '@/components/smartphoneApp/common/Frame'
import Button from '@/components/smartphoneApp/common/Button'
import style from '@/styles/components/smartphoneApp/startPage/accountRegistration/account.module.css'

function PhoneNumber() {
    return (
        <div className={style.wrap}>
            <h2 className={style.title}>UniRideをはじめよう</h2>
            <p className={style.text}>日本国内でSMS受信可能な<br />
                電話番号を入力してください。</p>
            <input type="text" placeholder='080 1234 5678' className={style.phoneNumber} />
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