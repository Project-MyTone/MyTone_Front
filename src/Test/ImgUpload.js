import { useState } from 'react';
import './ImgUpload.css';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import default_image from '../img/default_image.jpg';
//import axios from 'axios';

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

    // const sendImageToServer = async () => {
    //     if(image.image_file){
    //       const formData = new FormData()
    //       formData.append('file', image.image_file);
    //       await axios.post('/api/image/upload', formData);
    //       alert("서버에 등록이 완료되었습니다!");
    //       setImage({
    //         image_file: "",
    //         preview_URL: "img/default_image.png",
    //       });
    //     }
    //     else{
    //       alert("사진을 등록하세요!")
    //     }
    // }
    let PersonalColor = "SpringWarm";

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
                        onClick={() => navigate(`/Result/${PersonalColor}`)}>
                    결과확인
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ImgUpload;