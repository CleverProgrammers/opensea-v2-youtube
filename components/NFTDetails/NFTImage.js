import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `rounded-lg border dark:border-transparent dark:bg-[#313339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-5 w-5 text-gray-500 dark:text-gray-400`,
  likesCount: `text-sm font-semibold text-gray-500 dark:text-gray-400`,
  nftImage: `rounded-b-lg object-cover`,
}

function NFTImage({ image }) {
  console.log(image)
  return (
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        <Image height={20} width={20} src='/eth-logo.svg' alt='eth' />

        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likesCount}>200</div>
        </div>
      </div>

      <div>
        {image && (
          <Image
            className={style.nftImage}
            height={448}
            width={448}
            src={image}
            alt='NFT Image'
          />
        )}
      </div>
    </div>
  )
}

export default NFTImage
