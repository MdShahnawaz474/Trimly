"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            //TODO: add notification
            alert("File size too large")
            return;
        }

        setIsUploading(true)

        try {
            // 1) Get signature
            const signRes = await axios.get("/api/cloudinary-sign")
            const { signature, timestamp, apiKey, cloudName, uploadPreset } = signRes.data

            // 2) Upload straight to Cloudinary
            const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
            const uploadForm = new FormData()
            uploadForm.append("file", file)
            uploadForm.append("api_key", apiKey)
            uploadForm.append("timestamp", String(timestamp))
            if (uploadPreset) uploadForm.append("upload_preset", uploadPreset)
            uploadForm.append("signature", signature)

            const cloudinaryRes = await fetch(uploadUrl, {
                method: "POST",
                body: uploadForm
            })
            if (!cloudinaryRes.ok) throw new Error("Cloudinary upload failed")
            const cloudinaryData = await cloudinaryRes.json()

            // 3) Save metadata
            await axios.post("/api/videos", {
                title,
                description,
                publicId: cloudinaryData.public_id,
                originalSize: file.size,
                compressedSize: cloudinaryData.bytes,
                duration: cloudinaryData.duration || 0
            })

            router.push("/")
        } catch (error) {
            console.log(error)
        } finally {
            setIsUploading(false)
        }

    }


    return (
        <div className="container mx-auto p-4 ">
          <h1 className="text-2xl font-bold mb-4 ">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </button>
          </form>
        </div>
      );
}

export default VideoUpload
