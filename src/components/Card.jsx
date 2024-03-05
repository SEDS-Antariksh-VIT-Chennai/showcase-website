import React from 'react'

function Card({name, branch, year, linkedin, github}) {
  return (
    <div className="flex flex-col items-center space-y-2 border-gray-500 border-2 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-white text-center">{name}</h2>
        <p className="text-zinc-200 dark:text-zinc-100">
            {branch} 
        </p>
        <p className="text-zinc-200 dark:text-zinc-100">
            {year} Year
        </p>
        <p className="text-zinc-200 dark:text-zinc-100 flex gap-4 justify-center">
            {linkedin && <a className="text-blue-300" href={linkedin} target="_blank" rel="noopener noreferrer"><img className="h-6" src="linkedin.svg" alt=""/></a>}
            {github && <a className="text-blue-300" href={github} target="_blank" rel="noopener noreferrer"><img className="h-7" src="github.svg" alt=""/></a>}
        </p>
    </div>
  )
}

export default Card

