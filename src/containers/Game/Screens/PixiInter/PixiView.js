import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
const ErrorMessage = {
    simulator: `Can't Run GLView in Simulator :(`,
};
import styles from '../../styles';


export default class PixiView extends Component {

    _renderErrorView = (error) => (
        <View
            style={styles.errorContainer}>
            <Text>{error}</Text>
        </View>
    )
    render = () => {
        if (!Expo.Constants.isDevice) {
            return this._renderErrorView(ErrorMessage.simulator);
        }

        return (
            <Expo.GLView
                style={styles.container}
                onContextCreate={this._onGLContextCreate}
            />
        );
    };

    _onGLContextCreate = async gl => {
        // Stubbed out methods for shadow rendering
        gl.createRenderbuffer = () => { };
        gl.bindRenderbuffer = () => { };
        gl.renderbufferStorage = () => { };
        gl.framebufferRenderbuffer = () => { };

        gl.getContextAttributes = () => ({
            stencil: true
        });

        window.WebGLRenderingContext = gl;

        await this.props.onContextCreate(gl);
        let lastFrameTime;
        const render = () => {
            const now = 0.001 * global.nativePerformanceNow();
            const dt = typeof lastFrameTime !== 'undefined'
                ? now - lastFrameTime
                : 0.16666;
            requestAnimationFrame(render);

            this.props.render(dt);
            // NOTE: At the end of each frame, notify `Expo.GLView` with the below
            gl.endFrameEXP();

            lastFrameTime = now;
        };
        render();
    };
}

