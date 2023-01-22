/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fade, Zoom } from 'react-awesome-reveal'


function MovieForm() {

  // Here we define all the states, where we will store 
  // all the user data's that they may enter during each step/question.
  const [step, setStep] = useState(1)
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [language, setLanguage] = useState('')
  const [popularity, setPopularity] = useState('')
  const [movie, setMovie] = useState({});

  // Defining our router to handle routing
  const router = useRouter();

  const baseUrl = 'https://image.tmdb.org/t/p/original/'


  // This handleSubmit function will help us to get the data from the api based upon the parameters we pass.
  const handleSubmit = async (e) => {
    e.preventDefault()
    let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=6ad25c548375a9af9f142b9ea58b2a67&language=en-US&sort_by=popularity.desc&&include_video=false&page=1&primary_release_year=${year}&with_genres=${genre}&with_original_language=${language}&vote_count.gte=${popularity}&with_watch_monetization_types=flatrate`
    try {
      const response = await axios.get(endpoint)
      console.log(response);

      let randomIndex = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[randomIndex])
      setStep(5)
      console.log()
    } catch (err) {
      console.log(err)
    }
  }

  // This function will integrate the steps on the button Click
  const handleNextButton = () => {
    setStep(step + 1);
  }

  const handleHome = () => {
    router.push('/')
  }


  // This function will return us any random movie based upon the user's preferences which the user can choose
  const handleNextMovie = async () => {
    let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=6ad25c548375a9af9f142b9ea58b2a67&language=en-US&sort_by=popularity.desc&&include_video=false&page=1&primary_release_year=${year}&with_genres=${genre}&with_original_language=${language}&with_watch_monetization_types=flatrate`

    try {
      let response = await axios.get(endpoint)
      let randomIndex = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[randomIndex])
    } catch (err) {
      console.log(err)
    }
  }

  // Now based upon the step number each question will be rendered according to it.
  if (step === 1) {
    return (
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Fade duration={3000}>
        <Image
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-netflix-thrillers-1635450335.jpg"
          alt="Back"
          layout="fill"
          className="-z-10 !hidden opacity-60 sm:!inline"
          objectFit="cover"
        />
        </Fade>
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          alt="asd"
          onClick={handleHome}
        />
        <Zoom direction='down' duration={1000}>
        <div className="relative mt-24 h-[] space-y-8 rounded bg-black/90 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
          <label className="inline-block w-full text-3xl font-semibold text-white">
            What genre are you in the mood for today ?🍿
            <select
              onChange={(e) => setGenre(e.target.value)}
              className="input"
            >
              <option value="28">Action</option>
              <option value="35">Comedy</option>
              <option value="10749">Romance</option>
              <option value="27">Horror</option>
            </select>
            <button
              className="mt-28 w-full rounded bg-[#e50914] py-2 font-semibold"
              onClick={handleNextButton}
            >
              Next
            </button>
            <div className="mt-4 text-lg text-[gray]">
              New to Netflix ? {''}
              <button
                type="submit"
                className="text-lg text-white hover:underline"
              >
                {' '}
                Sign up now
              </button>
            </div>
          </label>
        </div>
      </Zoom>
      </div>
    )
  } else if (step === 2) {
    return (
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Fade duration={2000}>
          <Image
            src="https://cdn.pastemagazine.com/www/articles/2021/11/30/classic-movies-netlfix.jpg"
            alt="Back"
            layout="fill"
            className="-z-10 !hidden opacity-60 sm:!inline"
            objectFit="cover"
          />
        </Fade>
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          alt="asd"
          onClick={handleHome}
        />
        <Zoom direction='down' duration={3000}>
          <div className="relative mt-24 h-[] space-y-8 rounded bg-black/90 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <label className="inline-block w-full text-3xl font-semibold text-white">
              What release year you would like to watch ? 📅
              <select
                onChange={(e) => setYear(e.target.value)}
                className="input"
              >
                <option value="1960">60s</option>
                <option value="1970">70s</option>
                <option value="1980">80s</option>
                <option value="1990">90s</option>
              </select>
              <button
                className="mt-28 w-full rounded bg-[#e50914] py-2 font-semibold"
                onClick={handleNextButton}
              >
                Next
              </button>
              <div className="mt-4 text-lg text-[gray]">
                New to Netflix ? {''}
                <button
                  type="submit"
                  className="text-lg text-white hover:underline"
                >
                  {' '}
                  Sign up now
                </button>
              </div>
            </label>
          </div>
        </Zoom>
      </div>
    )
  } else if (step === 3) {
    return (
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image
          src="https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2021/09/050509095757/Addicting-Spanish-Series-on-Netflix.png"
          alt="Back"
          layout="fill"
          className="-z-10 !hidden opacity-60 sm:!inline"
          objectFit="cover"
        />
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          alt="asd"
          onClick={handleHome}
        />
        <Zoom direction='up' duration={2500}>
          <div className="relative mt-24 h-[] space-y-8 rounded bg-black/90 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <label className="inline-block w-full text-3xl font-semibold text-white">
              Which language do you prefer ? 🈯
              <select
                onChange={(e) => setLanguage(e.target.value)}
                className="input"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
                <option value="fr">French</option>
              </select>
              <button
                className="mt-28 w-full rounded bg-[#e50914] py-2 font-semibold"
                onClick={handleNextButton}
              >
                Next
              </button>
              <div className="mt-4 text-lg text-[gray]">
                New to Netflix ? {''}
                <button
                  type="submit"
                  className="text-lg text-white hover:underline"
                >
                  {' '}
                  Sign up now
                </button>
              </div>
            </label>
          </div>
        </Zoom>
      </div>
    )
  } else if (step === 4) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
          <Image
            src="https://wallpaperaccess.com/full/1087736.jpg"
            alt="Back"
            layout="fill"
            className="-z-10 !hidden opacity-60 sm:!inline"
            objectFit="cover"
          />
          <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}
            alt="asd"
            onClick={handleHome}
          />
          <Zoom direction='right' duration={2500}>
            <div className="relative mt-24 h-[] space-y-8 rounded bg-black/90 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
              <label className="inline-block w-full text-3xl font-semibold text-white">
                Finally, something popular or not so much well known ? 🎬
                <select
                  onChange={(e) => setPopularity(e.target.value)}
                  className="input"
                >
                  <option value="190">Popular</option>
                  <option value="100">Little Known</option>
                </select>
                <button
                  className="mt-28 w-full rounded bg-[#e50914] py-2 font-semibold"
                  onClick={handleSubmit}
                >
                  Next
                </button>
                <div className="mt-4 text-lg text-[gray]">
                  New to Netflix ? {''}
                  <button
                    type="submit"
                    className="text-lg text-white hover:underline"
                  >
                    {' '}
                    Sign up now
                  </button>
                </div>
              </label>
            </div>
          </Zoom>
        </div>
      </form>
    )
  } else if (step === 5) {

    // This return statement will return the NextMovie Component and then we can use the handleNextMovie function here.
    return (
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Back"
          layout="fill"
          className="-z-10 !hidden opacity-60 sm:!inline"
          objectFit="cover"
        />
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          alt="asd"
          onClick={handleHome}
        />
        <div className="relative mt-24 h-5/6 space-y-2 rounded bg-white/90 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
          <label className="w-full text-2xl font-semibold text-white">
            <h1 className="text-3xl font-semibold text-[#e50914]">
              Here's what you can watch instead
            </h1>

            <div className="mt-12">
              <Image
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt="Back"
                layout="intrinsic"
                className=" sm:!inline"
                objectFit="cover"
                width={400}
                height={200}
              />
            </div>
            <h1 className="mt-4 text-black">{movie.title}</h1>
            <div className="mt-4">
              <p className="mt-4 text-base font-normal text-black">
                Vote Count: {movie?.vote_count} 💹
              </p>
              <p className="mt-2 text-base font-normal text-black">
                Release Date: {movie.release_date} ⏳
              </p>
              <p className="mt-2 text-base font-normal text-black">
                Original Language: {movie?.original_language}🔤
              </p>
              <button
                onClick={handleNextMovie}
                className="mt-6 w-full rounded bg-[#e50914] py-2 text-lg font-semibold"
              >
                I dont like it, show other movie
              </button>
            </div>
            <div className="mt-2 text-base text-[gray]">
              New to Netflix ? {''}
              <button
                type="submit"
                className="text-base text-black hover:underline"
                // onClick={router.push('/login')}
              >
                {' '}
                Sign up now
              </button>
            </div>
          </label>
        </div>
      </div>
    )
  }
}

export default MovieForm
