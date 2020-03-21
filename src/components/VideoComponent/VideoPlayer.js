import React, { PureComponent } from "react";
import withStyles from "react-jss";
import "video.js/dist/video-js.css";
/*
import videojs from "video.js";
*/
import ReactPlayer from 'react-player'

import classnames from "classnames";

class VideoPlayer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const options = {
            controls: true,
            autoplay: false,
            fluid: true,
            loop: false,
            playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
            sources: [
                {
                    src: this.props.url,
                    type: "video/youtube"
                }
            ],
            controlBar: {
                volumePanel: true,
                progressControl: process.env.NODE_ENV !== "production",
                pictureInPictureToggle: false,
                currentTimeDisplay: true,
                liveDisplay: true,
                fullscreenToggle: false
            }
        };

       /* this.player = videojs(this._video, options);
        this.player.on("timeupdate", this.timeupdate);*/

     /*   const component = this;

        var videoJsButtonClass = videojs.getComponent("Button");*/
       /* var concreteButtonClass = videojs.extend(videoJsButtonClass, {
            // The `init()` method will also work for constructor logic here, but it is
            // deprecated. If you provide an `init()` method, it will override the
            // `constructor()` method!
            constructor: function() {
                videoJsButtonClass.call(this, component.player);
            }, // notice the comma

            handleClick: function(e) {
                component.rewindAction(e);
            }
        });

        var concreteButtonInstance = this.player.controlBar.addChild(
            new concreteButtonClass()
        );*/
     /*   var i = document.createElement("i");
        i.className = "material-icons";
        i.appendChild(document.createTextNode("history"));

        concreteButtonInstance.el().appendChild(i);

        this.recomputePausePoints();
        this.player.on("seeked", this.recomputePausePoints);*/
    }

/*    recomputePausePoints = () => {
        const currentTime = this.player.currentTime() * 1000;
        console.log("Recomputing...", currentTime);
        this.pausePoints = this.props.activities.filter(
            x => x.pausePoint > currentTime
        );
        console.log(this.pausePoints);
    };

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }*/

    // onClick = () => {
    //  if(this.player.paused()) {
    //      this.player.play();
    //  }
    // }

    render() {
        const { classes } = this.props;
        const { activity } = this.state;
        return (
            // <div className={classes.videoContainer}>
                <div className={classes.playerWrapper}>
                     <ReactPlayer
                         className={classes.reactPlayer}
                         width='100%'
                         height='100%'
                         controls
                         url={this.props.url} />
                    {/*<video
                        ref={ref => (this._video = ref)}
                        id="video-player"
                        className="video-js vjs-default-skin vjs-big-play-centered"
                        controls
                        preload="auto"
                    ></video>*/}
                </div>
            // </div>
        );
    }

    onActivityEnd = () => {
        this.setState({ activity: null });
        this.player.play();
    }

    rewindAction = event => {
        var nowTimeVal = this.player.currentTime(),
            rewindedTimeVal = 0;
        if (nowTimeVal >= 30) rewindedTimeVal = nowTimeVal - 30;

        this.player.currentTime(rewindedTimeVal);
        this.recomputePausePoints();
    };

    timeupdate = () => {
        const target = this.pausePoints[0];
        if (!target) return;

        const currentTime = this.player.currentTime() * 1000;
        console.log(currentTime, target.pausePoint);
        if (
            currentTime >= target.pausePoint &&
            currentTime < target.pausePoint + 500
        ) {
            this.player.pause();
            const pp = this.pausePoints.shift();
            this.setState({ activity: pp.activity });
        }
    };
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
