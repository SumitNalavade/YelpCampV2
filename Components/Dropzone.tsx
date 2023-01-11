import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  setFile: React.Dispatch<React.SetStateAction<File[] | undefined>>
  multiple: boolean
  text: string
}

const Dropzone: React.FC<Props> = ({ setFile, multiple, text }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles)
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="max-w-xl">
        <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-secondary border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              { text }
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" />
        </label>
      </div>
    </div>
  )
}


export default Dropzone;
