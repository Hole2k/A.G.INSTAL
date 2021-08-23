import React, {Component} from 'react';
import Content from "../components/Content/Content";
import {SliderData} from '../components/Slider/SliderData';
import ImageSlider from '../components/Slider/ImageSlider';


class index extends Component{


render()
    {
        return(
<div>
<ImageSlider slides={SliderData}/>
<Content/>
</div>
)
}
}


export default index;