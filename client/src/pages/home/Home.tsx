import { useState } from "react";
import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/reusable/NoteCard";
import AddNotes from "../../components/reusable/AddNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  const closeModal = () => {
    setOpenAddEditModal({ ...openAddEditModal, isShow: false });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 sm:px-4 md:px-8 lg:px-12">
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th April Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => { }}
          onDelete={() => { }}
          onPinNote={() => { }}
        />
        {/* two */}
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th April Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => { }}
          onDelete={() => { }}
          onPinNote={() => { }}
        />

        {/* three */}
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th April Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => { }}
          onDelete={() => { }}
          onPinNote={() => { }}
        />

        {/* four */}
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th April Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => { }}
          onDelete={() => { }}
          onPinNote={() => { }}
        />
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => setOpenAddEditModal({ ...openAddEditModal, isShow: true })}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShow}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Note"
        className="lg:w-[40%] w-full md:w-[70%] max-h-3/4 bg-white mx-auto mt-14 p-5 overflow-y-hidden overflow-scroll rounded-xl overflow-x-hidden"
      >
        <AddNotes
         type={openAddEditModal.type}
          noteData={openAddEditModal.data} 
          onClose={() => setOpenAddEditModal({ isShow: false, type: 'add', data: null })} />
      </Modal>
    </div>
  );
};

export default Home;
