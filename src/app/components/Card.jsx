import { useState } from 'react';
import Image from 'next/image';

export default function Card({ name, title, description, imageSrc, imageAlt }) {
  const [showModal, setShowModal] = useState(false);
  const defaultImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format";

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="glass-card p-4 text-center h-100">
        <div className="mb-3">
          <div 
            style={{ cursor: 'pointer' }}
            onClick={handleImageClick}
            title="Click to view full image"
          >
            <Image
              src={imageSrc || defaultImage}
              alt={imageAlt || `${name} avatar`}
              width={100}
              height={100}
              className="rounded-circle object-fit-cover"
            />
          </div>
        </div>
        <h5 className="mb-2">{name}</h5>
        {title && <h6 className="mb-3" style={{ color: "var(--text-light)" }}>{title}</h6>}
        {description && <p className="small mb-0">{description}</p>}
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} 
           style={{ display: showModal ? 'block' : 'none' }} 
           tabIndex="-1" 
           role="dialog"
           onClick={handleCloseModal}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header border-0">
              <h5 className="modal-title">{name}</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body text-center p-4">
              <Image
                src={imageSrc || defaultImage}
                alt={imageAlt || `${name} avatar`}
                width={300}
                height={300}
                className="rounded-circle object-fit-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
    </>
  );
}