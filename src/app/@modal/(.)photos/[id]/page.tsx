import React from 'react';
import Modal from "@/components/UI/Modal/Modal";
import Frame from "@/components/frame/Frame";
import photoData, {Photos} from "@/../utils/photos";

const Page = ({ params: { id: photoId } }: { params: { id: string } }) => {
    const photo: Photos = photoData.find((p) => p.id === photoId)!
    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    );
};

export default Page;