import React from 'react';


function Form() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Chcesz porad jak zacząć i odkryć ten świat razem z nami?</h1>
          <p>Zostaw swojego maila i zapisz sie do naszego newslettera</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black ' type="email" placeholder='E-mail' />
            <button className='bg-purple-600 w-[200px] rounded-md font-medium text-black ml-4 my-6 px-6 py-3'>Wyślij</button>
          </div>
          <p>Dbamy o ochrone twoich danych. Sprawdź naszą  <span className='text-purple-600'>Polityke Prywatności</span> </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
