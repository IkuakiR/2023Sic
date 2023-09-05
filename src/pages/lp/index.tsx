import { useState } from 'react'
import Header from '@/components/lp/Header'
import Footer from '@/components/lp/Footer'

export default function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <h1>これはランディングページのタイトルです。</h1>
            </main>
            <Footer />
        </>
    )
}