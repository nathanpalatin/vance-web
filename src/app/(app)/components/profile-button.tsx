import { ChevronDown, Database, LogOut, Settings } from 'lucide-react'

import { auth } from '@/auth/auth'

import { getGreeting, getInitials } from '@/lib/functions'

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '../../../components/ui/avatar'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../../../components/ui/dropdown-menu'
import { env } from '@/env/env'

export async function ProfileButton() {
	const { user } = await auth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex group items-center gap-3 outline-none">
				<div className="flex flex-col items-end gap-1">
					<span className="text-xs leading-3 text-muted-foreground">
						{getGreeting()},
					</span>
					<span className="text-xs">{user.name}</span>
				</div>
				<Avatar className="size-10">
					<AvatarImage
						src={`${env.NEXT_PUBLIC_CLOUDFLARE_URL}${user.avatar}`}
					/>
					<AvatarFallback className="border border-zinc-500">
						{getInitials(user.name)}
					</AvatarFallback>
				</Avatar>
				<ChevronDown
					className="relative h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="mt-2 border bg-zinc-900 border-zinc-800"
			>
				{user.role === 'MENTOR' && (
					<DropdownMenuItem className="border-b border-zinc-800" asChild>
						<a href="/dashboard" className="cursor-pointer">
							<Database className="mr-2 size-4" />
							Dashboard
						</a>
					</DropdownMenuItem>
				)}

				<DropdownMenuItem asChild>
					<a href="/settings/account" className="cursor-pointer">
						<Settings className="mr-2 size-4" />
						Minha conta
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<a href="/api/auth/sign-out" className="cursor-pointer">
						<LogOut className="mr-2 size-4" />
						Sair
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
