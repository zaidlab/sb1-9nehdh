import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setFile(file);
    } else {
      alert('Please upload a video file');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        alert('Upload successful!');
        setFile(null);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="pt-24 px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Upload Video</h1>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center
                   ${dragActive ? 'border-purple-400 bg-purple-500/10' : 'border-gray-700'}
                   ${!file ? 'hover:border-purple-400 hover:bg-purple-500/5' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center">
              <Upload className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <p className="text-lg font-medium">Drag and drop your video here</p>
              <p className="text-sm text-gray-400 mt-1">or</p>
              <button
                onClick={() => inputRef.current?.click()}
                className="mt-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 
                         hover:bg-purple-500/30 transition-all duration-300"
              >
                Select File
              </button>
              <input
                ref={inputRef}
                type="file"
                onChange={handleChange}
                accept="video/*"
                className="hidden"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 glass-effect rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-400">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setFile(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <button
              onClick={handleUpload}
              disabled={uploading}
              className={`w-full py-2 rounded-lg font-medium transition-all duration-300
                       ${uploading 
                         ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                         : 'bg-purple-500 text-white hover:bg-purple-600'}`}
            >
              {uploading ? 'Uploading...' : 'Upload Video'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;