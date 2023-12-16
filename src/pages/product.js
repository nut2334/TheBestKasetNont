import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Badge, IconButton } from '@mui/material';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';

const Product = () => {
    const [files, setFiles] = useState([]);
  
    const onDrop = useCallback((acceptedFiles) => {
      // ทำอะไรกับไฟล์ที่อัพโหลดที่ได้รับ (acceptedFiles)
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);
  
    const removeFile = (index) => {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles.splice(index, 1);
        return updatedFiles;
      });
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*,video/*', // รับเฉพาะไฟล์รูปภาพและวิดีโอ
    });
  
    return (
      <Container component="main" maxWidth="md">
      <div>
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} />
          <p>ลากและวางไฟล์ที่นี่หรือคลิกเพื่อเลือก</p>
        </div>
        <div>
          {files.map((file, index) => (
            <Badge
              key={index}
              badgeContent={
                <IconButton onClick={() => removeFile(index)}>
                  <CancelSharpIcon />
                </IconButton>
              }
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <div>
                {file.type.startsWith('image/') ? (
                  <img src={URL.createObjectURL(file)} alt={file.name} style={filePreviewStyles} />
                ) : (
                  <video src={URL.createObjectURL(file)} alt={file.name} style={filePreviewStyles} controls />
                )}
              </div>
            </Badge>
          ))}
        </div>
        
      </div>

      </Container>
    );
  };
  
  const dropzoneStyles = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  
  const filePreviewStyles = {
    maxWidth: '100%',
    maxHeight: '150px',
    width: '150px',
    height: '150px',
    objectFit: 'cover', // แสดงรูปในขนาดเต็มและ crop ถ้ามี
    objectPosition: 'center', // ตำแหน่งศูนย์กลางของรูปภาพหรือวิดีโอ
    marginBottom: '10px',
  };
  


export default Product