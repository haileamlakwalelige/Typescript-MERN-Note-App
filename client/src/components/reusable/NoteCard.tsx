import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md';

interface NoteCardProps {
  title: string;
  date: string;
  content: string;
  tags: string;
  isPinned: boolean;
  onPinNote: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const NoteCard = ({ title, date, content, tags, isPinned, onPinNote, onEdit, onDelete }:NoteCardProps) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in">
      <div className="flex items-center justify-between">
      <div className="note-header">
        <h2 className='text-sm font-medium'>{title}</h2>
        <span text-xs text-slate-500>{date}</span>
      </div>
      <MdOutlinePushPin className={`${isPinned ?  "text-primary":"text-slate-300"}`}/>
      </div>
      <div className="note-content">
        <p className='text-xs text-slate-600 mt-2'>{content?.slice(0, 60)}</p>
      </div>
      <div className='flex items-center justify-between mt-2'>
      <div >
        <p className='text-xs text-slate-500'>{tags}</p>
      </div>
      <div className="flex items-center gap-2">
      <MdCreate className='icon-btn hover:text-green-600' onClick={onEdit}/>
      <MdDelete className='icon-btn hover:text-green-600' onClick={onDelete}/>
        <button onClick={onPinNote}>{isPinned ? 'Unpin' : 'Pin'}</button>
      </div>
      </div>
    </div>
  );
}

export default NoteCard;
