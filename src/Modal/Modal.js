import React from 'react';
import {
  View, Image, Text, Modal as RNModal, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './styles/Modal';

import checkImg from '../assets/imgs/check.png';
import cancelImg from '../assets/imgs/cancel.png';
import warningImg from '../assets/imgs/warning.png';
import infoImg from '../assets/imgs/info.png';
import questionImg from '../assets/imgs/question.png';

const activeOpacity = 0.7;

function Modal({
  type, visible, title, message, showConfirmButton, confirmButtonText, confirmButtonColor, confirmButtonAction, showCancelButton, cancelButtonText, cancelButtonColor, cancelButtonAction, image, imageWidth, imageHeight, animation,
}) {
  return (
    <RNModal
      transparent
      visible={visible}
      animationType={animation}
    >
      <View style={Style.modal}>
        <View style={Style.container}>
          <View style={Style.header}>
            {type === 'success' && <Image source={checkImg} style={Style.icon} />}
            {type === 'error' && <Image source={cancelImg} style={Style.icon} />}
            {type === 'warning' && <Image source={warningImg} style={Style.icon} />}
            {type === 'info' && <Image source={infoImg} style={Style.icon} />}
            {type === 'question' && <Image source={questionImg} style={Style.icon} />}
            {image && <Image source={image} style={[Style.icon, imageWidth && { width: imageWidth }, imageHeight && { height: imageHeight }]} />}
            <Text style={Style.title}>{title}</Text>
          </View>
          <View style={Style.content}>
            <Text style={Style.text}>{message}</Text>
          </View>
          <View style={Style.footer}>
            {(showConfirmButton && !confirmButtonColor) && (
            <TouchableOpacity style={Style.button} activeOpacity={activeOpacity} onPress={() => confirmButtonAction()}>
              <Text style={Style.buttonText}>{confirmButtonText}</Text>
            </TouchableOpacity>
            )}
            {(showConfirmButton && confirmButtonColor) && (
            <TouchableOpacity style={[Style.button, { backgroundColor: confirmButtonColor }]} activeOpacity={activeOpacity} onPress={() => confirmButtonAction()}>
              <Text style={Style.buttonText}>{confirmButtonText}</Text>
            </TouchableOpacity>
            )}
            {(showCancelButton && !cancelButtonColor) && (
            <TouchableOpacity style={Style.button} activeOpacity={activeOpacity} onPress={() => cancelButtonAction()}>
              <Text style={Style.buttonText}>{cancelButtonText}</Text>
            </TouchableOpacity>
            )}
            {(showCancelButton && cancelButtonColor) && (
            <TouchableOpacity style={[Style.button, { backgroundColor: cancelButtonColor }]} activeOpacity={activeOpacity} onPress={() => cancelButtonAction()}>
              <Text style={Style.buttonText}>{cancelButtonText}</Text>
            </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </RNModal>
  );
}

Modal.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'question']).isRequired,
  animation: PropTypes.oneOf(['none', 'slide', 'fade']),
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  showConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  confirmButtonAction: PropTypes.func.isRequired,
  showCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cancelButtonColor: PropTypes.string,
  cancelButtonAction: PropTypes.func.isRequired,
  image: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};

Modal.defaultProps = {
  showConfirmButton: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#3085d6',
  showCancelButton: false,
  cancelButtonText: 'Cancel',
  cancelButtonColor: '#aaa',
  animation: 'none',
  image: null,
  imageWidth: 0,
  imageHeight: 0,
};

export default Modal;
