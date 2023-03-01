import Layout from "components/layout"
import Guitarra from "components/guitarra"
import styles from '@/styles/grid.module.css'

export default function Tienda({ data }) {

  return (
    <Layout
      title={'Tienda virtual'}
      description={'Tienda virtual, venta ded guitarras, instrumentos, GuitarLA'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>

        <div className={styles.grid}>
          {data?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data } = await respuesta.json()

  return {
    props: {
      data
    }
  }
} */

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data } = await respuesta.json()

  return {
    props: {
      data
    }
  }
}