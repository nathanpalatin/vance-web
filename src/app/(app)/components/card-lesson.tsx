import { ChevronDownIcon, PlayCircleIcon } from 'lucide-react'

interface CardLessonProps {
  title: string
  lessons: number
  totalTime: string
}

export function CardLesson({ title, lessons, totalTime }: CardLessonProps) {
  return (
    <div className='border mb-3 border-zinc-800 rounded'>
      <div className='p-2'>
        <div className='flex gap-3 justify-between'>
          <PlayCircleIcon color='green' />
          <div className='flex-1 flex-col leading-5'>
            <p>{title}</p>
            <span className='font-normal text-zinc-400 text-xs'>{lessons} aulas {totalTime}</span>
          </div>
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  )
}