interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
  }
  
  export const ResumeModal = ({ isOpen, onClose, imageUrl }: ResumeModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative z-10">
          <img src={imageUrl} alt="Resume" className="max-h-[90vh] max-w-[90vw]" />
        </div>
      </div>
    );
  };