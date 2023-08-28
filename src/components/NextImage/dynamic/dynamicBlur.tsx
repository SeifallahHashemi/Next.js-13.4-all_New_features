import getBase64 from "../../../../lib/getBase64";
import Image from "next/image";
import picture from "../../../../public/images/pic-one.jpg"

const DynamicBlur = async () => {
    const myBlurDataUrl = await getBase64("pic-one.jpg")
    return (
        <div>
            <Image src={picture} alt={"pic"} width={800} height={800} priority sizes={"400px"} placeholder={"blur"}
                   blurDataURL={myBlurDataUrl}/>
        </div>
    );
};

export default DynamicBlur;