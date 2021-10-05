import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../comps'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus cum voluptate nulla corporis sequi, id, inventore, saepe praesentium quo vitae error incidunt fugiat odio mollitia harum ducimus impedit totam.</p>
    </div>
  )
}
