import { useState } from 'preact/hooks'
import { DateTime, Interval } from 'luxon'
import { YEARS } from '../resources/constants'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'

export default function Home () {
  // hooks
  const [datePicker, setDatePicker] = useState('')
  const [result, setResult] = useState(undefined)
  const date = DateTime.local().toISODate()

  // functions
  const handleChange = (e) => {
    setDatePicker(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const now = DateTime.now()
    const birthDay = DateTime.fromISO(datePicker)
    const i = Interval.fromDateTimes(birthDay, now)
    const index = YEARS.findIndex(anio => anio >= i.length('days').toFixed())

    const nextBirthday = {
      date: birthDay.plus({ days: YEARS[index] }).setLocale('en').toLocaleString(DateTime.DATE_FULL),
      number: index + 1,
      current: index,
      currenDate: birthDay.plus({ days: YEARS[index - 1] }).toISODate()

    }

    setResult({ ...nextBirthday })
  }

  const reset = () => {
    setResult(undefined)
    setDatePicker('')
  }

  return (
    <section className={`min-h-screen p-y-5 max-w-[80%] flex flex-col ${result ? 'justify-around' : 'justify-start'} items-center`}>
      <AnimatePresence>
        {!result
          ? (
            <>
              <motion.h1
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className='font-bold py-20  text-5xl text-center'
              >
                When is my nearest Mathbirthday?
              </motion.h1>
              <motion.form
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className={`flex flex-col items-center justify-between ${!result && 'grow pb-20'} w-full sm:w-auto`}
              >
                <div className='flex flex-col w-full ju'>
                  <label for='datepicker' className='font-normal'>Choose your birthdate</label>
                  <motion.input
                    className='font-medium sm:w-80 w-full rounded border-white border-2 p-4 text-3xl sm:text-xl hover:scale-110 duration-300 hover:duration-300'
                    type='date'
                    max={date}
                    id='datepicker'
                    onChange={handleChange}
                    value={datePicker}
                    disabled={result}
                    required
                  />
                </div>
                <Button light type='submit'>Go it</Button>
              </motion.form>
            </>

            )
          : (
            <>
              <motion.h1
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className='font-bold text-4xl text-center'
              >
                If you born on {DateTime.fromISO(datePicker).setLocale('en').toLocaleString(DateTime.DATE_FULL)}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className=' py-8 px-2 rounded-lg border shadow-md bg-gray-800 border-gray-700 flex flex-col sm:p-10 sm:max-w-[80%]'
              >
                <header>
                  <h2 className='font-bold text-2xl text-white text-center'>Your next mathbirthday is...</h2>
                  <p className='text-white pt-4 text-center'>{result.date}</p>
                  <p className='text-9xl text-white pt-4 text-center'>{result.number}</p>
                  <p className='text-2xl text-white text-center'>Year{result.number > 1 && 's'}</p>
                </header>
                <br />
                <Button onClick={reset}>Try more dates</Button>
              </motion.div>
            </>
            )}
      </AnimatePresence>
    </section>
  )
}
