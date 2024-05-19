import Image from 'next/image'
import nextSVG from '../../../public/next.svg'
import styles from './Products.module.scss'
const Products = () => {
	return (
		<div className={styles.products}>
			<Image className={styles.nextSVG} src={nextSVG} alt='nextSVG' />
		</div>
	)
}

export default Products
