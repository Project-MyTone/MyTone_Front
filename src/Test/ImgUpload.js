import { useState } from 'react';
import './ImgUpload.css';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import default_image from '../img/default_image.jpg';
import axios from 'axios';
import base64 from 'base-64';


function ImgUpload() {
    let navigate = useNavigate();
    let inputRef;

    const [image, setImage] = useState({
        image_file: "",
        preview_URL: default_image
    });

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        
        if(e.target.files[0]){
          fileReader.readAsDataURL(e.target.files[0])
        }
        fileReader.onload = () => {
          setImage(
            {
              image_file: e.target.files[0],
              preview_URL: fileReader.result
            }
          )
        }
    }

    const deleteImage = () => {
        setImage({
          image_file: "",
          preview_URL: default_image
        });
    }


    const sendImageToServer = async () => {
        const token = localStorage.getItem("accessToken");

        if(image.image_file){
            const formData = new FormData()
            formData.append('file', image.image_file);
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            
            await axios.post('http://localhost:8000/image/',formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
             .then((res)=>{
            alert("서버에 등록이 완료되었습니다!");
            console.log(res);
            //navigate(`/Result/${PersonalColor}`);
          }).catch((err)=>{
            console.log(err);
          })
          // setImage({
          //   image_file: "",
          //   preview_URL: default_image,
          // });
        }
        else{
          alert("사진을 등록하세요!")
        }
    }

    return(
        <>
            <div className="ImgUpload_BG">
                <div style={{position: "relative", top: "120px"}}>
                    <h3 className="upload_title">이미지 업로드</h3>
                
                    <input type="file" accept="image/*"
                    onChange={saveImage}
                    onClick={(e)=>e.target.value = null}
                    ref={refParam => inputRef = refParam}
                    style={{ display: "none" }}/>

                    <div className="img-wrapper">
                    <img src={image.preview_URL} className="upload_img"/>
                    </div>
                    <Button type="primary" variant="contained" 
                        style={{backgroundColor: "#CD5C5C", color:"white", margin:"5px",
                        marginTop:"20px"}}
                        onClick={() => inputRef.click()}>
                        등록
                    </Button>
                    <Button color="error" variant="contained" 
                        style={{backgroundColor: "#CD5C5C", color:"white", margin:"5px",
                        marginTop:"20px"}}
                        onClick={deleteImage}>
                    삭제
                    </Button>
                    <Button color="error" variant="contained" 
                        style={{backgroundColor: "#CD5C5C", color:"white", margin:"5px",
                        marginTop:"20px"}}
                        onClick={sendImageToServer}>
                    결과확인
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ImgUpload;