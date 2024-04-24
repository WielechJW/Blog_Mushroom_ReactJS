import React from 'react'

function Project() {
  return (
    <div id='Projekt' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src="../image/Skrzat.png" alt="skrzat" />
        <div className='flex flex-col justify-center'>
          <p className='text-purple-600 font-bold'>O projekcie i społeczności</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Grzybowam Moc</h1>
          <p>
            Witajcie w naszym pasjonującym projekcie, poświęconym fascynującemu świecie grzybów! Naszym celem jest uświadamianie społeczeństwa na temat różnorodności grzybów oraz ich korzyści dla zdrowia i ekosystemu.
          </p>
          <p>
            Poprzez naszą stronę internetową, bloga i inne materiały edukacyjne, pragniemy dostarczać wiedzy i inspiracji wszystkim zainteresowanym tematyką grzybów. Chcemy pokazać, że grzyby to nie tylko smaczny składnik naszych potraw, ale również bogactwo substancji odżywczych, leczniczych i ekologicznych.
            Odkrywajcie z nami tajemnice różnorodnych gatunków grzybów, ich właściwości zdrowotne oraz ich rolę w utrzymaniu równowagi ekosystemów. Dołączcie do naszej pasjonującej podróży po magicznym świecie grzybów, gdzie każdy krok prowadzi do większej wiedzy, szacunku i harmonii z naturą.
          </p>
          <p>
            Razem możemy budować świadomość ekologiczną i pielęgnować więź z przyrodą, która stanowi fundament naszego zdrowia i dobrobytu. Przekonajcie się sami, jak wiele dobra i inspiracji może przynieść nam ta fascynująca część naszego świata!
          </p>
          {/* <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>
            Dołącz do społeczności
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Project