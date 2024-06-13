import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';


export default function Test() {
  const editorRef = useRef(null);
  const [imgFile, setImgFile] = useState(null);
  const [imgageFile, setImgageFile] = useState(null);
  const [folderName, setFolderName] = useState("")
  const [imgUrls, setImgUrls] = useState([])
  const [docc, setDocc] = useState('')

  


  const handleFolderName = (e) => {
    setFolderName(e.target.value)
    console.log(folderName)
  }
 

  


  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      getImgTag(editorRef.current.getContent());
      
    }
  };
  

  
  const getImgTag = async (content) => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const imgs = doc.querySelectorAll('img');
    // console.log(img)
    // console.log(img[0].src)
    // console.log(img[1].src)
    if(imgs.length > 1){
      const newImages = Array.from(imgs).map((img, index) => {
        img.setAttribute('name', `image${index + 1}`);
        return img
      })

     newImages.map(async (img , index) => {
      console.log("image from map" ,img)
      const imgSrc = img.src
      // console.log(imgSrc)
      
      if (imgSrc.startsWith('data:image')) {
        // Base64 string
        const mime = imgSrc.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
        const base64Response = await fetch(imgSrc);
        const blob = await base64Response.blob();
        const file = new File([blob], img.name, { type: mime });
        
        

        uploadFile(file, (fileURL) => {
          setImgUrls(prevUrls => [...prevUrls, fileURL]); // Update imgUrls with the new URL
        });


      }else {
        // URL
        response = await fetch(imgSrc);
        const blob = await response.blob();
        const file = new File([blob], 'image.png', { type: blob.type });
        console.log(file)
        uploadFile(file, (fileURL) => {
          setImgUrls(prevUrls => [...prevUrls, fileURL]); // Update imgUrls with the new URL
        });

  
      }


     })

      
      // console.log(newImages)

    }else{
      console.log(imgs[0])
      imgs.name = "image"
      const imgSrc = imgs[0].src
      console.log(imgSrc)
      // let fileName = getFileNameFromUrl(imgSrc);
      let response;
    if (imgSrc.startsWith('data:image')) {
      // Base64 string
      const mime = imgSrc.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
      const base64Response = await fetch(imgSrc);
      const blob = await base64Response.blob();
      const file = new File([blob], imgs.name , { type: mime });
      
      
      uploadFile(file, (fileURL) => {
        setImgUrls(prevUrls => [...prevUrls, fileURL]); // Update imgUrls with the new URL
      });


    } else {
      // URL
      response = await fetch(imgSrc);
      const blob = await response.blob();
      const mime = imgSrc.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
      const file = new File([blob], imgs.name , { type: mime });

      
      uploadFile(file).then((imgUrl) => {
        setImgUrls((prev) => {[...prev , imgUrl]})
      } )
      

     


    }

    }
    console.log(imgUrls)
    imgs.forEach(img => {
      // Update the src attribute of the image
      img.src = 'new_source_url'; // Replace 'new_source_url' with the new image source URL
  });  
    console.log(doc)  
    setDocc(doc.documentElement.innerHTML)
  }

  const uploadFile = async (imgFile, callback) => {
    if (!imgFile) {
      alert('Please select a file first.');
      return;
    }

    // S3 Configuration
    
    const REGION = "ap-south-1";
    const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

    const s3Client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
      },
    });

    const BUCKET_NAME = "sevenburgers";
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${folderName}/${imgFile.name}`,
      Body: imgFile,
    };

    try {
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command);

      // Construct file URL
      const fileURL = (`https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${folderName}/${imgFile.name}`)
      console.log('File uploaded successfully.', data);
      console.log('File URL:', fileURL);
      alert(`File uploaded successfully. File URL: ${fileURL}`);

      await callback(fileURL);
      
    } catch (err) {
      console.error('Error uploading file', err);
      alert('Error uploading file');
    }
  };


  

  return (
    <>
    <div className='w-[80%] m-auto p-5 '>
    <div className='p-6'> 
    <input type="text" value={folderName}  onChange={handleFolderName} />
    </div>
<Editor
        apiKey='qfzuulropygybvvwh3a6e9c6dfkqsx2un8753sluy4nxssmt'
        onInit={(_evt, editor) => editorRef.current = editor}
        init={{
          selector: 'textarea#file-picker',
  plugins: 'image code',
  toolbar: 'undo redo | link image | code',
  /* enable title field in the Image dialog*/
  image_title: true,
  /* enable automatic uploads of images represented by blob or data URIs*/
  automatic_uploads: true,
  /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */
  file_picker_types: 'image',
  /* and here's our custom image picker*/
  file_picker_callback: (cb, value, meta) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.addEventListener('change', (e) => {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
        const id = 'blobid' + (new Date()).getTime();
        const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        const base64 = reader.result.split(',')[1];
        const blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        /* call the callback and populate the Title field with the file name */
        cb(blobInfo.blobUri(), { title: file.name });
      });
      reader.readAsDataURL(file);
    });

    input.click();
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
        <img src="https://sevenburgers.s3.ap-south-1.amazonaws.com/blog/image1" alt="img" />
        <img src="https://sevenburgers.s3.ap-south-1.amazonaws.com/blog/image2" alt="img" />
        <img src="https://sevenburgers.s3.ap-south-1.amazonaws.com/blog/image3" alt="img" />
    </div>
    
    <div>{folderName}</div>
    <div dangerouslySetInnerHTML={{ __html: docc }}></div>


    </>
  );
}