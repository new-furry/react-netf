import React, { PureComponent } from "react";
import withStyles from "react-jss";
import "video.js/dist/video-js.css";
import ReactPlayer from 'react-player'

class VideoPlayer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
                <div className={classes.playerWrapper}>
                     <ReactPlayer
                         className={classes.reactPlayer}
                         width='100%'
                         height='100%'
                         controls
                         config={{
                             youtube: {
                                 playerVars: { showinfo: 1, controls: 1 },
                             }
                         }}
                         url={this.props.url} />
                </div>
        );
    }
}

const styles = {
    videoContainer: {  background: "#000", height: "100%" },
    activityContainer: {
        position: 'relative',
    },
    activityCanvas: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%', /* Player ratio: 100 / (1280 / 720) */
    },
    activityCanvasDisabled: { pointerEvents: "none" }
};

export default withStyles(styles)(VideoPlayer);
