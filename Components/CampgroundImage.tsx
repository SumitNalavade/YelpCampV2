import React from "react";

interface Props {
    imageUrl: string | undefined
}

const CampgroundImage: React.FC<Props> = ({ imageUrl }) => {
    return (
        <img src={imageUrl ? imageUrl : "https://hello.pricelabs.co/wp-content/plugins/elementor/assets/images/placeholder.png" } alt="" className="my-2 rounded-xl" />
    )
}

export default CampgroundImage;