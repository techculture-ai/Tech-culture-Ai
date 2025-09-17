"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { BiImageAlt } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import AIPageHeader from "../../components/AIPageHeader";

const OurWorkspace = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleModalBackdropClick = (e) => {
    // Close modal if clicking on the backdrop (not on the image container)
    if (e.target === e.currentTarget) {
      closeImageModal();
    }
  };

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
          {/* Stats and Controls */}
          <div className="mb-12">
            {/* <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {images.length}
                  </div>
                  <div className="text-gray-400 text-sm">Total Images</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {categories.length}
                  </div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {filteredImages.length}
                  </div>
                  <div className="text-gray-400 text-sm">Showing</div>
                </div>
              </div>
            </div> */}

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search workspace images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-w-[180px] w-full md:w-auto"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none z-10">
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image._id}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 workspace-image-hover workspace-grid-item"
                  onClick={() => openImageModal(image)}
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
                      <span>{formatDate(image.createdAt)}</span>
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

            {/* Image Container */}
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[75vh] object-contain"
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
                  <span className="text-gray-300 text-sm">
                    {formatDate(selectedImage.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurWorkspace;
