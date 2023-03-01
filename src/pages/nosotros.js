import Layout from "components/layout"
import Image from "next/image"
import styles from '@/styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLA, tienda de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>Donec finibus arcu vitae nisi molestie, eget euismod augue semper. Duis ut consectetur purus. Vestibulum imperdiet libero non ante tincidunt efficitur. Ut at erat maximus, semper elit eu, feugiat nibh. Praesent lectus nisl, varius ut varius elementum, bibendum et sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Pellentesque vulputate non urna ac tempus. Sed condimentum sodales urna. Aenean vitae dapibus diam. Fusce viverra commodo eleifend. Donec ultrices justo ultrices posuere viverra. Maecenas eu metus at enim fermentum pharetra ut nec nisl. Donec semper aliquet nisl, quis varius ipsum dignissim eget. Vestibulum gravida felis fermentum, viverra arcu et, aliquam erat. Duis non est sem.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}