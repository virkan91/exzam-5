import React from 'react'
import './nathing.css'
import img404 from '../../assets/07-404/img404.png'

const Nathing = () => {
  return (
    <div className='container px-[20px] mx-auto py-[100px] flex flex-col items-center'>
      <img src={img404} alt="" />
      <p className='max-w-[709px] mt-[20px] text-[50px] font-[700] text-center'>Запрошенная вами страница не найдена</p>
      <p className='mt-[21px] text-[26px] text-center max-w-[621px]'>Мы просим прощение за доставленные неудобства и предлагаем следующие пути:</p>
      <ul className='flex flex-col gap-[10px] mt-[15px] list-disc'>
        <li>Вернуться при помощи кнопки браузера или по этой ссылке</li>
        <li>Проверить правильность написания адреса страницы (URL)</li>
        <li>Перейти на главную страницу сайта</li>
      </ul>
      <div className='bg-[#FEAD04] py-[14px] cursor-pointer text-center text-white font-[500] w-[350px] mt-[40px]'>
        На  главную
      </div>
    </div>
  )
}

export default Nathing