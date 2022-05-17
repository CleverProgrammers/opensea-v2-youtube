import { BsCreditCard2FrontFill, BsFillTagFill } from 'react-icons/bs'
import { AiOutlineQuestionCircle, AiOutlineClockCircle } from 'react-icons/ai'
import Image from 'next/image'

const style = {
  wrapper: `flex flex-col divide-y  border dark:divide-black dark:rounded-lg dark:border-black`,
  header: `flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30]`,
  headerContent: `flex items-center space-x-2`,
  headerIcon: `h-6 w-6`,
  greyText: `text-gray-400`,
  mainContainer: `space-y-4 rounded-b-lg px-6 py-4 dark:bg-[#313339]`,
  priceInfoContainer: `space-y-1`,
  mediumFont: `font-medium`,
  priceContainer: `flex items-center space-x-2`,
  price: `text-3xl font-bold`,
  buttonsContainer: `flex space-x-4`,
  button: `flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white`,
  purchaseButton: `bg-blue-500`,
  offerButton: `border border-black bg-[#363840]`,
  buttonIcon: `h-6 w-6`,
}

const NFTSalesInfo = ({ price, buyNFT }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerContent}>
          <AiOutlineClockCircle
            className={`${style.headerIcon} ${style.greyText}`}
          />

          <div className={style.greyText}>
            Sales end June 1, 2022 at 8:20pm GMT-7
          </div>
        </div>

        <AiOutlineQuestionCircle className={style.headerIcon} />
      </div>

      <div className={style.mainContainer}>
        <div className={style.priceInfoContainer}>
          <div className={`${style.greyText} ${style.mediumFont}`}>Buy at</div>

          <div className={style.priceContainer}>
            <Image width={24} height={24} src='/weth-logo.svg' alt='weth' />
            <span className={style.price}>{price}</span>
          </div>
        </div>

        <div className={style.buttonsContainer}>
          <div
            onClick={buyNFT}
            className={`${style.button} ${style.purchaseButton}`}
          >
            <BsCreditCard2FrontFill className={style.buttonIcon} />
            <span className='text-lg font-semibold'>Buy now</span>
          </div>
          <div className={`${style.button} ${style.offerButton}`}>
            <BsFillTagFill className={style.buttonIcon} />
            <span className='text-lg font-semibold'>Make offer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTSalesInfo
