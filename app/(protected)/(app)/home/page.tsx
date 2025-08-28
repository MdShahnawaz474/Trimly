// "use client"
// import React, {useState, useEffect, useCallback} from 'react'
// import axios from 'axios'
// import VideoCard from '@/components/VideoCard'
// import { Video } from '@/types'

// function Home() {
//     const [videos, setVideos] = useState<Video[]>([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState<string | null>(null)

//     const fetchVideos = useCallback(async () => {
//         try {
//             const response = await axios.get("/api/videos")
//             if(Array.isArray(response.data)) {
//                 setVideos(response.data)
//             } else {
//                 throw new Error("Unexpected response format");
//             }
//         } catch (error) {
//             console.log(error);
//             setError("Failed to fetch videos")
//         } finally {
//             setLoading(false)
//         }
//     }, [])

//     useEffect(() => {
//         fetchVideos()
//     }, [fetchVideos])

//     const handleDownload = useCallback((url: string, title: string) => {
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", `${title}.mp4`);
//         link.setAttribute("target", "_blank");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     }, [])

//     if(loading){
//         return (
//             <div className='flex flex-col justify-center items-center h-screen'> 
//                 <div>
//                     <progress className="progress progress-secondary w-72" value={50} max="100"></progress>
//                 </div>
//                 <div>
//                     <progress className="progress progress-primary w-72" value={60} max="100"></progress>
//                 </div>
//                 <div>
//                     <progress className="progress progress-accent w-72" value="80" max="100"></progress>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="container mx-auto p-4 h-screen">
//           <h1 className="text-2xl font-bold mb-4">Videos</h1>
//           {videos.length === 0 ? (
//             <div className="text-center text-lg text-gray-500 flex items-center justify-center h-3">
//               No videos available
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {
//                 videos.map((video) => (
//                     <VideoCard
//                         key={video.id}
//                         video={video}
//                         onDownload={handleDownload}
//                     />
//                 ))
//               }
//             </div>
//           )}
//         </div>
//     );
// }

// export default Home

"use client"
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Play, Search, Grid3X3, List, SearchIcon } from 'lucide-react'
import { Video } from '@/types'

// Import your actual VideoCard component
import VideoCard from '@/components/VideoCard'

function Home() {
    const [videos, setVideos] = useState<Video[]>([])
    const [filteredVideos, setFilteredVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [viewMode, setViewMode] = useState('grid')
    const [sortBy, setSortBy] = useState('recent')
    console.log("API KEY:", process.env.CLOUDINARY_API_KEY)
    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/videos")
            if(Array.isArray(response.data)) {
                setVideos(response.data)
                setFilteredVideos(response.data)
            } else {
                throw new Error("Unexpected response format");
            }
        } catch (error) {
            console.log(error);
            setError("Failed to fetch videos")
        } finally {
            setLoading(false)
        }
    }, [])
    
    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    // Search and filter functionality
    useEffect(() => {
        let filtered = videos.filter(video =>
            video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase())
        )

        // Sort videos based on your Video type properties
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'size':
                    return Number(b.compressedSize) - Number(a.compressedSize)
                case 'duration':
                    return b.duration - a.duration
                case 'title':
                    return a.title.localeCompare(b.title)
                case 'compression':
                    const aCompression = Math.round((1 - Number(a.compressedSize) / Number(a.originalSize)) * 100)
                    const bCompression = Math.round((1 - Number(b.compressedSize) / Number(b.originalSize)) * 100)
                    return bCompression - aCompression
                default: // recent
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            }
        })

        setFilteredVideos(filtered)
    }, [videos, searchTerm, sortBy])
    
    const handleDownload = useCallback((url: string, title: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [])
    
    if(loading){
        return (
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className="text-center space-y-6">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-gray-600 rounded-full animate-spin border-t-blue-400 mx-auto"></div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-100">Loading Videos...</h2>
                        <div className="w-80 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
                                <span className="text-sm text-gray-300">Fetching content</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{width: '80%'}}></div>
                                <span className="text-sm text-gray-300">Processing data</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse" style={{width: '40%'}}></div>
                                <span className="text-sm text-gray-300">Almost ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl max-w-md border border-gray-700">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-red-400 text-2xl">⚠</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-100 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-300 mb-4">{error}</p>
                    <button 
                        onClick={fetchVideos}
                        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Page Title and Search/Controls */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                Video Library
                            </h1>
                            <p className="text-gray-300">Discover and explore our collection of {videos.length} videos</p>
                        </div>
                        
                        {/* Search and Controls */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Search */}
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-40" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search videos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-64 bg-gray-800/80 backdrop-blur-sm text-gray-100 placeholder-gray-400"
                                />
                            </div>
                            
                            {/* Sort */}
                            <select 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-800/80 backdrop-blur-sm text-gray-100"
                            >
                                <option value="recent">Most Recent</option>
                                <option value="size">File Size</option>
                                <option value="title">Title A-Z</option>
                                <option value="duration">Duration</option>
                                <option value="compression">Compression</option>
                            </select>
                            
                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-600 rounded-lg overflow-hidden bg-gray-800/80 backdrop-blur-sm">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 transition-colors duration-200 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <List size={20} />
                                    
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 transition-colors duration-200 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                  <Grid3X3 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {filteredVideos.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Play className="text-gray-400" size={40} />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                            {searchTerm ? 'No videos found' : 'No videos available'}
                        </h2>
                        <p className="text-gray-300 mb-6">
                            {searchTerm ? `Try adjusting your search term "${searchTerm}"` : 'Check back later for new content'}
                        </p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                ) : (
                    <>
                        {/* Results Info */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-300">
                                Showing {filteredVideos.length} of {videos.length} videos
                                {searchTerm && <span className="font-medium text-gray-100"> for &quot;{searchTerm}&quot;</span>}
                            </p>
                        </div>

                        {/* Video Grid */}
                        <div className={`grid gap-6 ${
                            viewMode === 'grid' 
                                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                                : 'grid-cols-1 lg:grid-cols-2'
                        }`}>
                            {filteredVideos.map((video, index) => (
                                <div 
                                    key={video.id}
                                    className="animate-fadeInUp transform hover:-translate-y-1 transition-transform duration-300"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <VideoCard
                                        video={video}
                                        onDownload={handleDownload}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

export default Home