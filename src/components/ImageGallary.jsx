import React, { useState, useEffect,useRef } from 'react';
import './ImageGallary.css';
import img1 from './image_1.jpg';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

const ImageGallary = ({imagesUrl,title,bedroom,bathroom,guest}) => {

    const [showShareModal, setShowShareModal] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const shareModalRef = useRef(null);
    const photoModalRef = useRef(null);
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];
    const [mainImage, ...smallImages] = imagesUrl;

    useEffect(() => {
        const savedState = localStorage.getItem('saved') === 'true';
        setIsSaved(savedState);

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleClickOutside = (event) => {
        if (shareModalRef.current && !shareModalRef.current.contains(event.target)) {
            setShowShareModal(false);
        }
        if (photoModalRef.current && !photoModalRef.current.contains(event.target)) {
            setShowPhotoModal(false);
        }
    };

    const handleShareClick = () => {
        setShowShareModal(true);
    };

    const handleCloseModal = () => {
        setShowShareModal(false);
    };
    const handleShowAllPhotos = () => {
        setShowPhotoModal(true);
        setCurrentImageIndex(0);
    };
    const handleClosePhotoModal = () => setShowPhotoModal(false);
    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => 
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => 
            prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    const toggleSave = () => {
        const newSavedState = !isSaved;
        setIsSaved(newSavedState);
        localStorage.setItem('saved', newSavedState);
    };

    return (
        <>
            <div className="image-gallary">
                {/* <h2>{title}</h2> */}
                <div className="image-gallary-icon">
                    <h2>{title}</h2>
                    <div className="left">
                        <button id="image-gallary-icon-down-left" onClick={handleShareClick}>
                            <span className="icon">↗ </span>
                            <span className="text">Share</span>
                        </button>
                        <button className="image-gallary-icon-down-right" id="saveBtn" onClick={toggleSave}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className={`heart-icon ${isSaved ? 'active' : ''}`}>
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </span>
                            <span className="text">Save</span>
                        </button>
                    </div>
                </div>
                <div className="image-grid">
                    <img className="main-image" src={mainImage} alt="Main" />
                    {smallImages.map((img, index) => (
                        <img key={index} className="small-image" src={img} alt={`Small ${index + 1}`} />
                    ))}
                    <button id="showAllPhotos" className="show-all-photos-btn"onClick={handleShowAllPhotos}>Show all photos</button>
                </div>
            </div>

            {showShareModal && (
                <div id="shareModal" className="share-modal-class" >
                <div className="modal-content" ref={shareModalRef}>
                    <span className="share-photo-close" onClick={handleCloseModal}>&times;</span>
                    <h2>Share this place</h2>
                    <div className="rental-summary">
                    {/* style="float: left; margin-right: 10px;border-radius: 5px;" */}
                        <img src={img2} width="50px" height="50px" alt="Rental thumbnail"/>
                        <p>Rental unit in Lima · ★New · 1 bedroom · 1 bed · 1 bath</p>
                    </div>
                    <div className="share-options">
                        <button id="copyLink" className="share-btn"onClick={handleCopyLink}>Copy Link</button>
                        <button className="share-btn">Email</button>
                        <button className="share-btn">Messages</button>
                        <button className="share-btn">WhatsApp</button>
                        <button className="share-btn">Messenger</button>
                        <button className="share-btn">Facebook</button>
                        <button className="share-btn">Twitter</button>
                        <button className="share-btn">Embed</button>
                        <button className="share-btn">More options</button>
                    </div>
                </div>
            </div>            
            )}
            {showPhotoModal && (
            <div id="photoModal" className="photo-modal"ref={photoModalRef}>
                <span className="photo-close" onClick={handleClosePhotoModal}>&times;</span>
                <div className="navigation">
                <span id="imageCounter">{`${currentImageIndex + 1} / ${images.length}`}</span>
                </div>
                <button id="prevBtn" className="nav-btn"onClick={handlePrevImage}style={{display: currentImageIndex === 0 ? 'none' : 'block'}}>&lt;</button>
                src={images[currentImageIndex]}
                <img className="modal-content-photo" id="modalImage" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}/>
                    <button id="nextBtn" className="nav-btn" onClick={handleNextImage}
                            style={{display: currentImageIndex === images.length - 1 ? 'none' : 'block'}}>
                        &gt;
                    </button>
            </div>
            )}
        </>





    );
};

export default ImageGallary;