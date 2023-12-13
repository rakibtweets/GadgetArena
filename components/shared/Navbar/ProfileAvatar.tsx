import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { profileLinks } from '@/constants';
import Link from 'next/link';

const ProfileAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-1 w-[200px] p-5" align="start">
        {profileLinks.map(({ Icon, name, route }) => (
          <DropdownMenuItem key={name}>
            <Link href={route} className="flex items-center gap-x-3 gap-y-4">
              <Icon />
              <p>{name}</p>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileAvatar;
