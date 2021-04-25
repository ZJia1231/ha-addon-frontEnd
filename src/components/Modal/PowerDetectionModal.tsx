import React, { useState, ReactNode } from 'react';
import TypeModalProps from '@/ts/type/TypeModal';
import BaseModal from './BaseModal';
import DeviceNameItem from './components/DeviceNameItem';
import IndicatorLEDItem from './components/IndicatorLEDItem';
import PowerState from './components/PowerStateItem';
import EnableEntityItem from './components/EnableEntityItem';
import DeviceDataModal from './DeviceDataModal';

/**
 * 功率检测单通道
 * @param props
 * @returns
 */
const PowerDetectionModal: React.FC<TypeModalProps> = (props) => {
    const [action, setAction] = useState(true);
    const [titleAction, setTitleAction] = useState<ReactNode>(<a onClick={channelSetting}>Status</a>);
    const [visible, setVisible] = useState(true);
    function onCancel() {
        setVisible(false);
    }
    function channelSetting() {
        setAction(false);
        setTitleAction(<a onClick={deviceSetting}>Device settings</a>);
    }
    function deviceSetting() {
        setAction(true);
        setTitleAction(<a onClick={channelSetting}>Status</a>);
    }
    return (
        <BaseModal {...props} titleAction={titleAction} visible={visible} onCancel={onCancel}>
            {action ? (
                <div>
                    <DeviceNameItem></DeviceNameItem>
                    <IndicatorLEDItem></IndicatorLEDItem>
                    <PowerState></PowerState>
                    <EnableEntityItem></EnableEntityItem>
                </div>
            ) : (
                <DeviceDataModal />
            )}
        </BaseModal>
    );
};
export default PowerDetectionModal;
