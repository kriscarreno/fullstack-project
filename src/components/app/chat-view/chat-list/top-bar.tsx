import React from 'react'
import { Info, Phone, Video } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import { User } from '@/types/chats'
import { DEFAULT_IMAGE } from '@/_mocks/chat-list'

interface ChatTopbarProps {
  selectedUser: User
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }]

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <div className='w-full h-20 flex p-4 justify-between items-center border-b'>
      <div className='flex items-center gap-2'>
        <Avatar className='flex justify-center items-center'>
          <AvatarImage
            src={selectedUser.picture || DEFAULT_IMAGE}
            alt={selectedUser.username}
            width={6}
            height={6}
            className='w-10 h-10 '
          />
        </Avatar>
        <div className='flex flex-col'>
          <span className='font-bold'>{selectedUser.username}</span>
          <span className='text-xs'>Active 2 mins ago</span>
        </div>
      </div>

      <div>
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            href='#'
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
            )}
          >
            <icon.icon size={20} className='text-muted-foreground' />
          </Link>
        ))}
      </div>
    </div>
  )
}