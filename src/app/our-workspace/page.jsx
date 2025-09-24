"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline, IoCloseOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiImageAlt } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import AIPageHeader from "../../components/AIPageHeader";

const OurWorkspace = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalImageLoading, setModalImageLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchWorkspaceImages();
  }, []);

  useEffect(() => {
    filterImages();
  }, [images, searchTerm, selectedCategory]);

  const fetchWorkspaceImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${apiBaseUrl}/api/gallery?galleryType=image`
      );
      const data = await response.json();

      if (data.success && data.gallery) {
        setImages(data.gallery);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.gallery.map((img) => img.category)),
        ];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Error fetching workspace images:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterImages = () => {
    let filtered = images;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredImages(filtered);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const openImageModal = (image, index) => {
    setModalImageLoading(true);
    setSelectedImage(image);
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
    setModalImageLoading(false);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const currentIndex = selectedImageIndex;
    const totalImages = filteredImages.length;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }
    
    setModalImageLoading(true);
    setSelectedImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleImageLoad = () => {
    setModalImageLoading(false);
  };

  const handleModalBackdropClick = (e) => {
    // Close modal if clicking on the backdrop (not on the image container)
    if (e.target === e.currentTarget) {
      closeImageModal();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          navigateImage('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateImage('next');
          break;
        case 'Escape':
          e.preventDefault();
          closeImageModal();
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedImage, selectedImageIndex]);

  // Skeleton component for loading state
  const ImageSkeleton = () => (
    <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden">
      <div className="w-full h-[75vh] max-h-[600px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse relative">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        {/* Loading icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="text-white/70 text-sm font-medium">Loading high quality image...</p>
          </div>
        </div>
      </div>
      
      {/* Skeleton info section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
        <div className="h-6 bg-gray-600/50 rounded mb-2 animate-pulse w-3/4"></div>
        <div className="flex items-center gap-4">
          <div className="h-4 w-20 bg-gray-600/50 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000319] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="text-white/80 text-lg font-medium">
            Loading workspace images...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Our Workspace"
        subtitle="Behind the Scenes of Innovation"
        description="Explore the dynamic environment where our team creates cutting-edge AI solutions and transforms ideas into reality."
        aiWords={["Creative", "Collaborative", "Innovative"]}
      />

      <section className="py-20 bg-[#000319] min-h-screen custom-scrollbar">
        <div className="container mx-auto px-4">
          {/* Images Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image._id}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 workspace-image-hover workspace-grid-item"
                  onClick={() => openImageModal(image, index)}
                  style={{ animationDelay: `${(index % 8) * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.thumbnail || image.url}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM1NTU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KPC9zdmc+"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-orange-500/20 backdrop-blur-sm text-orange-300 text-sm font-medium rounded-full border border-orange-500/30">
                            {image.category}
                          </span>
                          <HiOutlinePhotograph className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span className="capitalize">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-600/20 rounded-full flex items-center justify-center">
                <BiImageAlt className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {searchTerm || selectedCategory !== "all"
                  ? "No Images Found"
                  : "No Workspace Images"}
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                {searchTerm || selectedCategory !== "all"
                  ? "Try adjusting your search or filter criteria to find what you're looking for."
                  : "Workspace images will appear here once they are uploaded."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 modal-backdrop z-[999] flex items-center justify-center p-4 overflow-hidden"
          onClick={handleModalBackdropClick}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full mx-auto">
            {/* Close Button - Fixed position inside viewport */}
            <button
              onClick={closeImageModal}
              className="fixed top-6 right-6 z-[1000] bg-black/50 backdrop-blur-sm text-white hover:text-orange-400 transition-colors p-2 rounded-full hover:bg-black/70"
              aria-label="Close image"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-[1000] bg-black/50 backdrop-blur-sm text-white hover:text-orange-400 transition-all p-3 rounded-full hover:bg-black/70 group"
                  aria-label="Previous image"
                >
                  <IoChevronBack className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => navigateImage('next')}
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-[1000] bg-black/50 backdrop-blur-sm text-white hover:text-orange-400 transition-all p-3 rounded-full hover:bg-black/70 group"
                  aria-label="Next image"
                >
                  <IoChevronForward className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {filteredImages.length > 1 && (
              <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {selectedImageIndex + 1} of {filteredImages.length}
                </span>
              </div>
            )}

            {/* Image Container */}
            {modalImageLoading && <ImageSkeleton />}
            
            <div className={`relative bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden transition-opacity duration-300 ${modalImageLoading ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}>
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[75vh] object-contain"
                onLoad={handleImageLoad}
                loading="eager"
                priority={true}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-orange-500/20 backdrop-blur-sm text-orange-300 text-sm font-medium rounded-full border border-orange-500/30">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Hint */}
            {filteredImages.length > 1 && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] bg-black/30 backdrop-blur-sm text-white/70 px-4 py-2 rounded-full text-xs">
                Use ← → arrow keys or click buttons to navigate
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OurWorkspace;
