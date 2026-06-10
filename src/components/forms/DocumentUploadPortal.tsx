"use client";

import { useState } from "react";
import { UploadCloud, FileText, CheckCircle, XCircle, AlertCircle, File, Trash2 } from "lucide-react";

export default function DocumentUploadPortal() {
  const [uploads, setUploads] = useState<{ id: string; name: string; status: 'uploading' | 'success' | 'error'; progress: number }[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      const newId = Math.random().toString(36).substring(7);
      setUploads(prev => [...prev, { id: newId, name: file.name, status: 'uploading', progress: 0 }]);
      
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setUploads(prev => prev.map(u => u.id === newId ? { ...u, progress, status: 'success' } : u));
        } else {
          setUploads(prev => prev.map(u => u.id === newId ? { ...u, progress } : u));
        }
      }, 500);
    });
  };

  const removeFile = (id: string) => {
    setUploads(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <UploadCloud className="w-5 h-5 text-gray-300" />
          Secure Document Portal
        </h3>
        <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">256-bit Encryption Active</span>
      </div>
      
      <div className="p-6">
        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-sm text-blue-800">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <p>Please upload clear, legible copies of your documents. Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB per document.</p>
        </div>

        {/* Drag and Drop Area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors relative
            ${dragActive ? "border-primary bg-red-50" : "border-gray-300 hover:border-gray-400 bg-gray-50"}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            multiple 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <div className="flex flex-col items-center justify-center pointer-events-none">
            <div className="bg-white p-3 rounded-full shadow-sm mb-4">
              <UploadCloud className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-1">Drag and drop your files here</p>
            <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-sm pointer-events-auto hover:bg-gray-50">
              Select Files
            </button>
          </div>
        </div>

        {/* Upload List */}
        {uploads.length > 0 && (
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-900 mb-3 border-b pb-2">Uploaded Documents ({uploads.length})</h4>
            <div className="space-y-3">
              {uploads.map(upload => (
                <div key={upload.id} className="flex items-center p-3 border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div className="w-10 h-10 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center mr-4">
                    <FileText className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{upload.name}</p>
                      {upload.status === 'success' && <span className="text-xs text-green-600 font-medium flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Complete</span>}
                      {upload.status === 'uploading' && <span className="text-xs text-gray-500 font-medium">{Math.round(upload.progress)}%</span>}
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ${upload.status === 'success' ? 'bg-green-500' : 'bg-primary'}`} 
                        style={{ width: `${upload.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button onClick={() => removeFile(upload.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-md hover:bg-red-50">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                className="px-6 py-2 bg-primary text-white rounded-md font-medium text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                disabled={uploads.some(u => u.status === 'uploading')}
              >
                Submit Documents
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
