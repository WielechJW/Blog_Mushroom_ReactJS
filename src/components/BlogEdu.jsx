import React from 'react'

function BlogEdu() {
  return (
    <div  className='w-full py-[10rem] px-4 bg-white'>
        <div id='Blog' className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='mx-auto w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <img className=' mx-aut rounded-lg' src="../image/GrzybyDanie.jpg" alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Kulinarne Przygody z Grzybami</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8'>Najlepsze przepisy z wykorzystaniem grzybów</p>
              <p className='py-2 border-b mx-8'>Grzyby w kuchni różnych kultur</p>
              <p className='py-2  mx-8'>Sekrety smaku: jak wydobyć pełnię aromatu z grzybów</p>
            </div>
            <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Czytaj więcej...</button>
          </div>
          <div className=' w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <img className='mx-auto bg-white rounded-lg' src="../image/Krasnal2.jpg" alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Eksploracja Tajemniczego Świata Grzybów</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8'>Grzyby w mitach i legendach</p>
              <p className='py-2 border-b mx-8'>Egzotyczne gatunki grzybów z całego świata</p>
              <p className='py-2  mx-8'>Grzyby w sztuce i kulturze popularnej</p>
            </div>
            <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Czytaj więcej...</button>
          </div>       
          <div className=' w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <img className='mx-auto bg-white rounded-lg' src="../image/ForestGrzyb.jpg" alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Naukowe Odkrycia Świata Grzybów</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8'>Fascynujące fakty o różnych gatunkach grzybów</p>
              <p className='py-2 border-b mx-8'>Badania naukowe </p>
              <p className='py-2  mx-8'>Grzyby w mikoryzie</p>
            </div>
            <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Czytaj więcej...</button>
          </div>                 
        </div>
    </div>
  )
}

export default BlogEdu