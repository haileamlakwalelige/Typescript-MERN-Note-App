// import React from 'react';
import { getInitials } from '../../utils/helper';

interface ProfileProps {
    onLogout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ProfileInfo: React.FC<ProfileProps> = ({ onLogout }) => {
  return (
    <div className='flex gap-6 justify-center items-center'>
      <div className='rounded-full p-2 bg-slate-100 hover:bg-slate-200 cursor-pointer text-center items-center flex'>
        {getInitials('John William')}
      </div>
      <div>
        <p>William</p>
        <button type="button" onClick={onLogout} className='font-light text-blue-500 underline'>Logout</button>
      </div>
    </div>
  );
}

export default ProfileInfo;
