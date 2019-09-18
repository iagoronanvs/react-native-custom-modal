import React, { Component } from 'react';
import { View, Image, Text, Modal as RNModal, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Style from './styles/Modal';

class Modal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        const {
            type,
            visible,
            title,
            message,
            showConfirmButton,
            confirmButtonText,
            confirmButtonColor,
            confirmButtonAction,
            showCancelButton,
            cancelButtonText,
            cancelButtonColor,
            cancelButtonAction,
            image,
            imageWidth,
            imageHeight,
            animation
        } = this.props;

        return (
            <RNModal
                transparent
                visible={visible}
                animationType={animation}
            >
                <View style={Style.modal}>
                    <View style={Style.container}>
                        <View style={Style.header}>
                            {type === 'success' && <Image source={require('../assets/imgs/check.png')} style={Style.icon} />}
                            {type === 'error' && <Image source={require('../assets/imgs/cancel.png')} style={Style.icon} />}
                            {type === 'warning' && <Image source={require('../assets/imgs/warning.png')} style={Style.icon} />}
                            {type === 'info' && <Image source={require('../assets/imgs/info.png')} style={Style.icon} />}
                            {type === 'question' && <Image source={require('../assets/imgs/question.png')} style={Style.icon} />}
                            {image && <Image source={image} style={[Style.icon, imageWidth && {width: imageWidth}, imageHeight && {height: imageHeight} ]} />}
                            <Text style={Style.title}>{title}</Text>
                        </View>
                        <View style={Style.content}>
                            <Text style={Style.text}>{message}</Text>
                        </View>
                        <View style={Style.footer}>
                            {(showConfirmButton && !confirmButtonColor) && (
                                <TouchableOpacity style={Style.button} activeOpacity={0.7} onPress={() => { confirmButtonAction && confirmButtonAction() }}>
                                    <Text style={Style.buttonText}>{confirmButtonText}</Text>
                                </TouchableOpacity>
                            )}
                            {(showConfirmButton && confirmButtonColor) && (
                                <TouchableOpacity style={[Style.button, {backgroundColor: confirmButtonColor}]} activeOpacity={0.7} onPress={() => { confirmButtonAction && confirmButtonAction() }}>
                                    <Text style={Style.buttonText}>{confirmButtonText}</Text>
                                </TouchableOpacity>
                            )}

                            {(showCancelButton && !cancelButtonColor) && (
                                <TouchableOpacity style={Style.button} activeOpacity={0.7} onPress={() => { cancelButtonAction && cancelButtonAction() }}>
                                    <Text style={Style.buttonText}>{cancelButtonText}</Text>
                                </TouchableOpacity>
                            )}
                            {(showCancelButton && cancelButtonColor) && (
                                <TouchableOpacity style={[Style.button, {backgroundColor: cancelButtonColor}]} activeOpacity={0.7} onPress={() => { cancelButtonAction && cancelButtonAction() }}>
                                    <Text style={Style.buttonText}>{cancelButtonText}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </RNModal>
        );
    }
}

Modal.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'question']),
    animation: PropTypes.oneOf(['none', 'slide', 'fade']),
    visible: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string,
    confirmButtonAction: PropTypes.func,
    showCancelButton: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    cancelButtonColor: PropTypes.string,
    cancelButtonAction: PropTypes.func,
    image: PropTypes.any,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number
}

Modal.defaultProps = {
    showConfirmButton: true,
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6',
    showCancelButton: false,
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#aaa',
    animation: 'none'
}

export default Modal;