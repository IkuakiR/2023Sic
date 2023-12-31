import Layout from '@/components/layout'
import { Progress } from '@/components/progress'
import { login } from '@/hooks/system/actioncreator'
import { useSystem } from '@/hooks/system/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LoginForm() {
  const [sysState, sysDispatch] = useSystem()
  const router = useRouter()

  const [viewState, setViewState] = useState({
    userId: '',
    pw: ''
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <input type='text' placeholder='USER ID' value={viewState.userId}
          onChange={(e) => setViewState({
            ...viewState,
            userId: e.target.value
          })} />
        <input type='password' placeholder='PASSWORD' value={viewState.pw}
          onChange={(e) => setViewState({
            ...viewState,
            pw: e.target.value
          })} />
        <input type='button' value='LOGIN'
          onClick={() => login(sysDispatch, router, viewState.userId, viewState.pw)} />
      </Layout>

      {(sysState.isWaiting) &&
        <Progress />
      }
    </>
  )
}