import React from "react";
import { Dimmer, Loader, Segment, Image } from "semantic-ui-react";

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


export default () => {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src={paragraph} />
    </Segment>
    )
}