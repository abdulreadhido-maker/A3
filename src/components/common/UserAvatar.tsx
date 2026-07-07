import {
  User
} from "lucide-react";



interface UserAvatarProps {

  name?:string;

  image?:string;

  size?:number;

}



function UserAvatar({

name,

image,

size=45

}:UserAvatarProps){



return (

<div

className="user-avatar"

style={{

width:size,

height:size

}}

>


{

image

?

<img

src={image}

alt={name || "User"}

className="avatar-image"

/>


:

<>

<User

size={size * 0.5}

/>


</>

}



</div>

);


}



export default UserAvatar;
